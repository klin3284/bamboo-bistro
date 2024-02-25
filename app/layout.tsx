import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bamboo Bistro",
  description: "Kenny's Restaurant with Friends",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={raleway.className}>
      <head>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}
