'use client'
import { useState } from "react";
import vector from "/public/image/header/Vector.png"
import headerStyll from "./sidebarHeader.module.css"
import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image"

export default function SidebarHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const links = [
        {href: '/findhomes', label:'Homes'},
        { href: '/agents', label: 'Agents' },
        { href: '/sell', label: 'Sell' },
        { href: '/buy', label: 'Buy' },
        { href: '/message', label: 'Message'},
        { href: '/', label: 'My Homes' }
    ];
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    
    return (        
        <main className={headerStyll.alter}> 
             <button onClick={handleClick} className={`${headerStyll.altButton} ${isOpen ? headerStyll.open: ''}`} id='menu-btn'>
                <img src={vector.src} alt="verctor"/>
            </button>   

            {/* <nav className={headerStyll.sidebar}>
                <ul>
                    {links.map(({href, label})=>(
                        <li key = {href}>
                            <Link className={headerStyll.menu} href={href} > {label}</Link>
                        </li>
                    ))}
                </ul>
            </nav> */}
            {/* <div className={headerStyll.logo}>
                <Image src="/image/header/logo.png" 
                    alt="Home Haven Logo"                           
                    width={100}
                    height={100} 
                    className={headerStyll.image}/>
                <Typography variant="h5" className={headerStyll.text}>
                    Home Haven
                </Typography> 
            </div> */}
                     
        </main>       
    )
}