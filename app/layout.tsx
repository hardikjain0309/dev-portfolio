import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navBar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Hardik's Porfolio"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <body className={`antialiased bg-background text-primary`}>
        <div className="flex flex-col min-h-screen items-center">
          <NavBar />
          <main className="py-8 px-8 gap-4 mt-12 max-w-screen-lg">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
