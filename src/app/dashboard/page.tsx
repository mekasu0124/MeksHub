import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Mek's Hub - Dashboard",
}

export default function DashboardPageLayout({
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
  )
}