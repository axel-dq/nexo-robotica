import "./page.css";

export default function PropositoVisionMision() {
    return (
        <div className="min-h-svh bg-nexo-white flex flex-col justify-stretch items-stretch">
            <div className="flex">
                <div className="w-full h-80 bg-red-600"></div>
                <div className="w-full h-80 bg-red-400"></div>
                <div className="w-full h-80 bg-red-200"></div>
            </div>
            <ul className="flex list-none items-center grow">
                <li className="flex-1 p-10 fade-up">
                    <h1 className="text-8xl font-bold mb-10 text-center">{"Propósito >"}</h1>
                    <p className="text-xl">
                        Minim et Lorem aliqua nostrud mollit ullamco id consequat ex aute do labore. Eu consectetur officia in ullamco et deserunt et magna irure quis. Voluptate nisi excepteur deserunt proident sit commodo sint culpa ut nulla pariatur ex.
                    </p>
                </li>
                <li className="flex-1 p-10 fade-up">
                    <h1 className="text-8xl font-bold mb-10 text-center">{"Visión >"}</h1>
                    <p className="text-xl">
                        Minim et Lorem aliqua nostrud mollit ullamco id consequat ex aute do labore. Eu consectetur officia in ullamco et deserunt et magna irure quis. Voluptate nisi excepteur deserunt proident sit commodo sint culpa ut nulla pariatur ex.
                    </p>
                </li>
                <li className="flex-1 p-10 fade-up">
                    <h1 className="text-8xl font-bold mb-10">Misión</h1>
                    <p className="text-xl">
                        Minim et Lorem aliqua nostrud mollit ullamco id consequat ex aute do labore. Eu consectetur officia in ullamco et deserunt et magna irure quis. Voluptate nisi excepteur deserunt proident sit commodo sint culpa ut nulla pariatur ex.
                    </p>
                </li>
            </ul>
        </div>
    )
}
