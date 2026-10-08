import { Outfit, Ovo, Lora } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-outfit",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ovo",
});

// Import font Lora
const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

export const metadata = {
  title: "MPLB2 ICN",
  description: "MPLB2 2024-2027",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en" className="scroll-smooth" data-scroll-behavior="smooth" suppressHydrationWarning
    >
      <body className={`${outfit.variable} ${ovo.variable} ${lora.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}