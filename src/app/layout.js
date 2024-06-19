import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "@/app/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Haven",
  description: "Home Haven",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <header>
          {/* <MainHeader /> // A top navigation bar component which exists in entire website*/}
          <MainHeader/>
        </header>

        <main>
          {/* Main contents for each page*/}
          {children}
        </main>

        <footer>
          {/* Some useful information for clients, such as contact info*/}
        </footer>
      </body>     
    </html>
    
  );
}
