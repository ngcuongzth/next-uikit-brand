import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Uikit Brand",
  description: "Digital Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn(poppins.className, "relative h-full antialiased")}>
        {children}
      </body>
    </html>
  );
}
