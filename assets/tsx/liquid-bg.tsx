import { useEffect, useRef, useState } from 'react';

const vertexShaderSource = `
  attribute vec2 a_position;
  void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
  }
`;

const fragmentShaderSource = `
  precision highp float;
  
  uniform vec2 u_resolution;
  uniform float u_time;

  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
      const vec2 C = vec2(1.0/6.0, 1.0/3.0) ;
      const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

      vec3 i  = floor(v + dot(v, C.yyy) );
      vec3 x0 = v - i + dot(i, C.xxx) ;

      vec3 g = step(x0.yzx, x0.xyz);
      vec3 l = 1.0 - g;
      vec3 i1 = min( g.xyz, l.zxy );
      vec3 i2 = max( g.xyz, l.zxy );

      vec3 x1 = x0 - i1 + C.xxx;
      vec3 x2 = x0 - i2 + C.yyy; 
      vec3 x3 = x0 - D.yyy;      

      i = mod289(i);
      vec4 p = permute( permute( permute(
                  i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

      float n_ = 0.142857142857; 
      vec3  ns = n_ * D.wyz - D.xzx;

      vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

      vec4 x_ = floor(j * ns.z);
      vec4 y_ = floor(j - 7.0 * x_ );    

      vec4 x = x_ *ns.x + ns.yyyy;
      vec4 y = y_ *ns.x + ns.yyyy;
      vec4 h = 1.0 - abs(x) - abs(y);

      vec4 b0 = vec4( x.xy, y.xy );
      vec4 b1 = vec4( x.zw, y.zw );

      vec4 s0 = floor(b0)*2.0 + 1.0;
      vec4 s1 = floor(b1)*2.0 + 1.0;
      vec4 sh = -step(h, vec4(0.0));

      vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
      vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

      vec3 p0 = vec3(a0.xy,h.x);
      vec3 p1 = vec3(a0.zw,h.y);
      vec3 p2 = vec3(a1.xy,h.z);
      vec3 p3 = vec3(a1.zw,h.w);

      vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
      p0 *= norm.x;
      p1 *= norm.y;
      p2 *= norm.z;
      p3 *= norm.w;

      vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
      m = m * m;
      return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                    dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution.xy;
      float aspect = u_resolution.x / u_resolution.y;
      vec2 st = uv;
      st.x *= aspect;

      vec2 distortion = vec2(
          snoise(vec3(st * 1.1, u_time * 0.06)),
          snoise(vec3(st * 1.4 + vec2(3.1, 2.4), u_time * 0.08))
      ) * 0.5;

      vec2 warpedUV = uv + distortion;

      vec3 whiteColor = vec3(0.97, 0.98, 0.99);
      vec3 blueColor  = vec3(0.30, 0.60, 1.0);
      vec3 purpleColor= vec3(0.48, 0.20, 0.88);
      vec3 redColor   = vec3(0.90, 0.20, 0.30);

      float blendNoise = snoise(vec3(warpedUV * 1.5, u_time * 0.1));
      float whiteFactor = 1.0 - smoothstep(0.15, 0.75, warpedUV.x + 0.15 * blendNoise);

      float purpleMix = smoothstep(0.2, 1.2, warpedUV.y + warpedUV.x * 0.5 - 0.2 * blendNoise);
      vec3 colorGrad = mix(blueColor, purpleColor, purpleMix);

      float redMix = smoothstep(0.95, 1.5, warpedUV.x + warpedUV.y * 0.3 + 0.2 * snoise(vec3(warpedUV * 2.5, u_time * 0.15)));
      colorGrad = mix(colorGrad, redColor, redMix);

      vec3 finalColor = mix(colorGrad, whiteColor, whiteFactor);
      gl_FragColor = vec4(finalColor, 1.0);
  }
`;

export default function LiquidBg() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null;
        if (!gl) return;

        const compileShader = (type: number, source: string): WebGLShader | null => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
        const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);
        if (!vertexShader || !fragmentShader) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);

        const positions = new Float32Array([
            -1.0, -1.0, 1.0, -1.0, -1.0, 1.0,
            -1.0, 1.0, 1.0, -1.0, 1.0, 1.0,
        ]);
        gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

        const uResolutionLocation = gl.getUniformLocation(program, 'u_resolution');
        const uTimeLocation = gl.getUniformLocation(program, 'u_time');

        const resize = () => {
            if (!canvas || !gl) return;
            // Cap DPR at 2.0 to prevent excessive rendering load on Retina/4K screens
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;
            gl.viewport(0, 0, canvas.width, canvas.height);
        };

        window.addEventListener('resize', resize);
        resize();

        let animationFrameId: number;
        let isVisible = false;

        const render = (time: number) => {
            if (!isVisible) return; // Skip rendering if off-screen

            time *= 0.001;
            gl.useProgram(program);

            gl.enableVertexAttribArray(positionLocation);
            gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
            gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

            gl.uniform2f(uResolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(uTimeLocation, time);

            gl.drawArrays(gl.TRIANGLES, 0, 6);

            animationFrameId = requestAnimationFrame(render);
        };

        // Use IntersectionObserver to track visibility and pause/resume animation
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    cancelAnimationFrame(animationFrameId);
                    animationFrameId = requestAnimationFrame(render);
                } else {
                    cancelAnimationFrame(animationFrameId);
                }
            },
            { threshold: 0 }
        );

        observer.observe(canvas);
        setLoaded(true);

        return () => {
            window.removeEventListener('resize', resize);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);

            if (gl) {
                gl.deleteBuffer(positionBuffer);
                if (program) gl.deleteProgram(program);
                if (vertexShader) gl.deleteShader(vertexShader);
                if (fragmentShader) gl.deleteShader(fragmentShader);
            }
        };
    }, []);

    return (
        <div className={`overflow-hidden bg-gray-50 relative size-full ${loaded ? 'opacity-100 transition-opacity duration-1000' : 'opacity-0'}`}>
            <canvas
                ref={canvasRef}
                className="block w-full h-full absolute inset-0 z-0"
                style={{ touchAction: 'none' }}
            />
        </div>
    );
}
