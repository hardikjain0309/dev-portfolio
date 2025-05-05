import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "./_components/navBar";
import PostAnimationLoader from "./_components/postAnimationLoader";

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
        <div className="flex flex-col items-center">
          <NavBar />
          <main className="mt-12">
            <PostAnimationLoader>
              {children}
            </PostAnimationLoader>
          </main>
        </div>
      </body>
    </html>
  );
}
