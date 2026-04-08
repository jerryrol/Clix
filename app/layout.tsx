import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clix | Influencer Fan Token Platform",
  description:
    "Clix is a Web3-inspired influencer fan token platform where creators launch tokenized communities and fans unlock real utility.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
