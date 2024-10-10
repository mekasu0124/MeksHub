import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mek's Hub - Signup",
}

export default function SignupPageLayout({
  children
}: Readonly<{ 
  children: React.ReactNode 
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};
