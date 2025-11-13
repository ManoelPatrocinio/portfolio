import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header  from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import { SpeedInsights } from "@vercel/speed-insights/next"

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetBrainsMono",
});
export const metadata = {
  title: "Manoel Patrocínio",
  description: "Transformo soluções, ideias e sonhos em realidade, através de sites que entregam exatamente o que você precisa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${jetBrainsMono.variable}`}>
        <Header />
        <StairTransition/>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
