"use client"
import Link from "next/link"
import Image from "next/image"
import styles from "./header.module.css"
import AltHeader from "./altHeader"
import { usePathname } from 'next/navigation';

export default function MainHeader() {
    const pathname = usePathname();
    return (
        <>
        <header className={styles.header}>
            <Link className={styles.logo} href="/">            
            <Image src="/image/header/logo.png" 
                   alt="Home Haven Logo"                           
                   width={100}
                   height={100} />
            Home Haven

            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link className = {pathname === '/findhomes' ? styles.underline : ""} href="/findhomes">Homes</Link>
                    </li>
                    <li>
                        <Link className = {pathname === '/agents' ? styles.underline : ""} href="/agents">Agents</Link>
                    </li>
                    <li>
                        <Link className = {pathname === '/sell' ? styles.underline : ""} href="/sell">Sell</Link>
                    </li>
                    <li>
                        <Link className = {pathname === '/buy' ? styles.underline : ""} href="/buy">Buy</Link>
                    </li>
                    <li>
                        <Link className = {pathname === '/' ? styles.underline : ""} href="/">My Homes</Link>
                    </li>
                </ul>
                
            </nav>
            </header>

            <AltHeader/>
        </>
    )
}
