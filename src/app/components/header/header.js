"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { Typography } from "@mui/material";

export default function MainHeader() {
  const links = [
    { href: "/findhomes", label: "Homes" },
    { href: "/agents", label: "Agents" },
    { href: "/sell", label: "Sell" },
    { href: "/buy", label: "Buy" },
    { href: "/message", label: "Message" },
    { href: "/signIn", label: "My Homes" },
  ];
  return (
    <>
      <header className={styles.header}>
        <Link className={styles.logo} href="/">
          <Image
            src="/image/header/logo.png"
            alt="Home Haven Logo"
            width={100}
            height={100}
          />
          <Typography variant="h4">Home Haven</Typography>
        </Link>

        <nav className={styles.nav}>
          <ul>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link className={styles.underline} href={href}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
