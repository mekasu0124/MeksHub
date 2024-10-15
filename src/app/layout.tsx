import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Mek's Hub",
  description: "Developed By Mek & Friends",
  icons: ["/images/app-icon.jpg"]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};
