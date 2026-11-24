import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { StoreProvider } from "@/components/store";
export const metadata: Metadata = {
  title: {
    default: "CampusFind — Back where it belongs",
    template: "%s | CampusFind",
  },
  description:
    "A campus lost and found board that brings students and their belongings back together.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navbar campus="G01 · BCY-5C" />
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
          <Footer group="G01" />
        </StoreProvider>
      </body>
    </html>
  );
}
