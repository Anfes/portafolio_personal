import { Work_Sans } from "next/font/google";
import "./globals.css";


const workSans = Work_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Andres Felipe Salazar | Desarrollador Frontend",
  description: "Portafolio personal de Andres Felipe Salazar Peña",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={workSans.className}>{children}</body>
    </html>
  );
}
