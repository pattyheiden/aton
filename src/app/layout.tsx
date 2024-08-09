import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const mont = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aton Soluções Técnicas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-zinc-100 text-zinc-950 antialiased m-0 p-0 w-full">
      <body className={mont.className}>
        <div className="min-h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
