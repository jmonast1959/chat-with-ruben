import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chat with Ruben, about Claude",
  description:
    "Ask questions and get answers drawn from Ruben Hassid's newsletters about how to use Claude.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
