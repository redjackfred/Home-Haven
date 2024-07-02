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
import 'bootstrap/dist/css/bootstrap.min.css';

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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossorigin="anonymous"
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
        <script
          src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin
        ></script>

        <script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin
        ></script>

        <script>var Alert = ReactBootstrap.Alert;</script>
      </body>
    </html>
  );
}
