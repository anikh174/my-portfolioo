import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import CustomCursor from "@/components/layout/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anik Hossain | Creative Frontend Developer",
  description: "Modern portfolio of Anik Hossain, a frontend developer specializing in building premium web experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <CustomCursor />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
