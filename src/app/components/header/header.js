import Link from "next/link"
import logo from "/public/image/header/logo.png"

import headerStyll from "./header.module.css"
import AltHeader from "./altHeader"
import Image from "next/image"

export default function MainHeader() {
    return (
        <main>
            <header className={headerStyll.header}>
            <Link className={headerStyll.logo} href="/">
                <Image src={logo.src} width={100} height={100}/>
                Home Haven  
            </Link>

            <nav className={headerStyll.nav}>
                <ul>
                    <li>
                        <Link href="/findhomes">Homes</Link>
                    </li>
                    <li>
                        <Link href="/agents">Agents</Link>
                    </li>
                    <li>
                        <Link href="/sell">Sell</Link>
                    </li>
                    <li>
                        <Link href="/buy">Buy</Link>
                    </li>
                    <li>
                        <Link href="/">My Homes</Link>
                    </li>
                </ul>
                
            </nav>
            </header>

            <AltHeader/>
        </main>
        

        
    )
}