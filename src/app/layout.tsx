import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hows the weather",
  description: "A simple weather app, made with Next.js and Open-Meteo API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>hi{children}</body>
    </html>
  );
}
