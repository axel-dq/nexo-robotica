import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  "allowedDevOrigins": ['192.168.10.12', '192.168.10.9']
};

export default nextConfig;
