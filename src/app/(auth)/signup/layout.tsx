import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mek's Hub - Create New User",
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
}