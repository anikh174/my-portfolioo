import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import CustomCursor from "@/components/ui/CustomCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anik Hossain | Full-Stack Developer",
  description: "Portfolio of Anik Hossain — MERN Stack developer building fast, accessible, and beautiful web applications.",
  keywords: ["Anik Hossain", "MERN Stack", "Next.js", "React", "Portfolio", "Web Developer", "Dhaka"],
  openGraph: {
    title: "Anik Hossain | Full-Stack Developer",
    description: "MERN Stack developer building fast, accessible, and beautiful web applications.",
    type: "website",
  },
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
          <CustomCursor />
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
