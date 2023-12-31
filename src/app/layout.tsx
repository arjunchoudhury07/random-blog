import "./globals.css";
import { Inter, Nunito } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const nutino = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "My App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}  max-w-7xl mx-auto `}>
        {children}
      </body>
    </html>
  );
}
