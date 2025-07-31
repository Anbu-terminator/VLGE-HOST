import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { NewsTicker } from "./NewsTicker";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <NewsTicker />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
}
