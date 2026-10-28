'use client'

import { useState, useRef } from "react";

export default function ContactForm() {
    const [consentChecked, setConsentChecked] = useState(false);

    const privacyPolicyDialogRef = useRef<HTMLDialogElement>(null);

    return (
        <>
            <p className="text-center text-5xl lg:text-6xl font-bold text-balance h-26 md:h-auto" id="contact-msg">
                Hablános <br className="inline md:hidden" /> de tu proyecto <br className="hidden md:block" /> <span className="hidden md:inline">y como podemos acompañarte</span>
            </p>
            <form className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6 [&_input]:bg-[#b0b5bf] [&_label]:text-nexo-white [&_input]:text-nexo-black [&_input]:text-lg [&_textarea]:bg-[#b0b5bf] [&_textarea]:text-nexo-black [&_textarea]:text-lg [&_textarea]:border [&_input]:border [&_input]:border-[#dfe0e8] [&_textarea]:border-[#dfe0e8]">
                <div className="w-full">
                    <label htmlFor="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder="Tu nombre" className="w-full p-2 rounded-md mt-2 mb-5 placeholder:brightness-150" />
                </div>
                <div className="w-full">
                    <label htmlFor="email">Correo</label>
                    <input type="email" id="email" name="email" placeholder="tuCorreo@gmail.com" className="w-full p-2 rounded-md mt-2 mb-5" />
                </div>
                <div className="w-full">
                    <label htmlFor="message">Mensaje</label>
                    <textarea id="message" name="message" placeholder="Escribe tu mensaje aquí..." className="w-full p-2 rounded-md mt-2 mb-5 h-50"></textarea>
                </div>
                <div className="text-sm text-[#5e5d5e] flex flex-col gap-2">
                    <p className="text-nexo-white">
                        Tus datos serán utilizados por Nexo Robótica SRL para gestionar tu consulta y responderte.
                        No incluyas contraseñas ni información sensible innecesaria. Conoce más en nuestra{" "}
                        <button className="underline cursor-pointer" onClick={() => privacyPolicyDialogRef.current?.showModal()}>
                            Política de Privacidad
                        </button>.
                    </p>
                    <div className="flex items-center justify-start gap-2 self-start">
                        <div className={`size-5 border-2 border-nexo-black rounded-sm opacity-100 flex items-center justify-center cursor-pointer ${consentChecked ? 'bg-nexo-blue-100 border-nexo-blue-200' : 'bg-white border-gray-400'}`} onClick={() => setConsentChecked((val) => !val)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#F3F3F3"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" /></svg>
                        </div>
                        <input type="checkbox" id="consent" name="consent" required onClick={() => setConsentChecked((val) => !val)} className="hidden" />
                        <label htmlFor="consent">
                            He leído la{" "}
                            <button className="underline cursor-pointer" onClick={() => privacyPolicyDialogRef.current?.showModal()}>
                                Política de Privacidad
                            </button>
                            {" "}y la información sobre el tratamiento de mis datos
                        </label>
                    </div>
                </div>
                <button type="submit" disabled={!consentChecked} className="bg-nexo-red-100 px-10 py-2 rounded-full text-2xl font-bold text-center text-nexo-black cursor-pointer hover:brightness-75 transition-all duration-200 btn disabled:cursor-not-allowed disabled:brightness-75 disabled:pointer-events-none">
                    Enviar
                </button>
            </form>

            <dialog ref={privacyPolicyDialogRef} id="privacy-policy" className="w-11/12 md:w-1/4 p-6 rounded-lg bg-nexo-white text-nexo-black backdrop:blur-2xl backdrop:bg-black/50 mx-auto my-auto">
                <button className="absolute top-4 right-4 text-2xl size-10 flex items-center justify-center font-bold text-nexo-black cursor-pointer bg-nexo-red-100 rounded-full p-2" onClick={() => privacyPolicyDialogRef.current?.close()}>
                    &times;
                </button>
                <h1 className="text-2xl font-bold">Politica de Privacidad</h1>
                <h2 className="font-semibold mb-4">Protección de datos personales y confidencialidad</h2>

                <p>
                    Nexo Robótica SRL tratará los datos personales proporcionados mediante este formulario exclusivamente para gestionar consultas, evaluar requerimientos y establecer comunicaciones relacionadas con los servicios solicitados.

                    La información recibida será tratada con medidas de seguridad y confidencialidad adecuadas, conforme a la Ley N.º 25.326 de Protección de Datos Personales de la República Argentina.

                    El titular de los datos podrá ejercer sus derechos de acceso, rectificación, actualización y supresión a través de los canales indicados en nuestra Política de Privacidad.

                    Por favor, no incluya contraseñas, credenciales ni información sensible que no resulte necesaria para su consulta.
                </p>
            </dialog>
        </>
    );
}
