import Link from "next/link"
import logo from "./logo.png"
import headerStyll from "./header.module.css"

export default function MainHeader() {
    return (
        <header className={headerStyll.header}>
            <Link className={headerStyll.logo} href="/">
            <img src={logo.src} alt="Home Haven Logo" />
            Home Haven
        </Link>

        <nav className={headerStyll.nav}>
            <ul>
                <li>
                    <Link href="/">Homes</Link>
                </li>
                <li>
                    <Link href="/">Agents</Link>
                </li>
                <li>
                    <Link href="/">Sell</Link>
                </li>
                <li>
                    <Link href="/">Buy</Link>
                </li>
                <li>
                    <Link href="/">My Homes</Link>
                </li>
            </ul>
            
        </nav>

        </header>
        
    )
}