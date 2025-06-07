import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "./components";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Fun with flags",
  description:
    "Fun with flags is website develop for view infos flags as capital, coin, region, population and and other information.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${poppins.className} antialiased`}>
          <Header />
          <main className="flex flex-col flex-1">{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
