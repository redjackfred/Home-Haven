import { Inter } from "next/font/google";
import "./globals.css";
import MainHeader from "./components/header/header";
import Head from "next/head";
import { theme } from "./utils/theme";
import { ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Home Haven",
  description: "Home Haven",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
        />      
      </Head>

      <body
        className={`${inter.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider theme={theme}>
          <header>
            {/* <MainHeader /> // A top navigation bar component which exists in entire website*/}
            <MainHeader />
          </header>

          <main>
            <div className="mainContainer">
              {/* Main contents for each page*/}
              {children}
            </div>
          </main>

          <footer>
            {/* Some useful information for clients, such as contact info*/}
          </footer>
        </ThemeProvider>     
      </body>
    </html>
  );
}
