import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body>
        <header className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-800 text-white">
          <span>Nexo Robótica</span>
          <span>Ingeniería · Tecnología · Estrategia</span>
        </header>
        <main className="flex-1 p-4">
          {children}
        </main>
      </body>
    </html>
  );
}
