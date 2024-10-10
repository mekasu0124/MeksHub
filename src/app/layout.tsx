import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mek's Hub",
  description: "The application that showcases all software developed by Mek & Friends",
  icons: ['./images/app-icon.jpg'],
};

import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header className="flex flex-row justify-evenly items-center w-full h-16 top-0">
          <div className="flex flex-row items-center justify-start w-full ml-10">
            <h1 className="font-inkfree text-foreground text-3xl tracking-widest italic txtShadow2">Mek&#39;s Hub</h1>
          </div>

          <div className="flex flex-row items-center justify-end w-full mr-10">
            <Image src="/images/app-icon.jpg" alt="Mek's Hub Icon" width={100} height={50} className="rounded" />
          </div>
        </header>

        {children}
  
        <footer className="flex flex-col items-center justify-center w-full h-14 bottom-0 fixed">
          <p className="font-inkfree text-[#C6C6C6] text-xl tracking-widest font-bold italic txtShadow2">&copy;Mek & Friends 2024</p>
        </footer>
      </body>
    </html>
  );
}
