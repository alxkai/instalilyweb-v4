import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instalily AI",
  description: "Deploy your AI Workforce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
