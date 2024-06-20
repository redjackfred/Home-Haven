import Link from "next/link"
import Image from "next/image"
import headerStyll from "./header.module.css"
import AltHeader from "./altHeader"
import Image from "next/image"

export default function MainHeader() {
    return (
        <header className={headerStyll.header}>
            <Link className={headerStyll.logo} href="/">            
            <Image src="/image/header/logo.png" 
                   alt="Home Haven Logo"                           
                   width={100}
                   height={100} />
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
        </>
        

        
    )
}