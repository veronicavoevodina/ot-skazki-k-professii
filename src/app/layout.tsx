import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  variable: "--font-fraunces",
  subsets: ["latin", "cyrillic"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Мудрость женщин в сказках: какие качества помогают людям сегодня?",
  description:
    "Сказочное путешествие для второклассников: качества героев сказок и профессии, где они могут пригодиться.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${sourceSerif.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
