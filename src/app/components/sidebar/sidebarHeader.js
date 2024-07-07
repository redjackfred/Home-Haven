'use client'
import { useState, useEffect, useRef } from "react";
import headerStyll from "./sidebarHeader.module.css"
import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image"

export default function SidebarHeader() {
    const [isOpen, setIsOpen] = useState(false);
    const [isSelect, setIsSelect] = useState(false);
    const menuRef = useRef(null);

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
    const selectNav = () => {
        setIsSelect(!isSelect);
        
    }
    const closeMenu = () => {
        // setIsOpen(false);
        setTimeout(() => setIsOpen(false), 150);
    }
    // use to click to close the sidebar
    useEffect(()=>{
        const handleClickoutSide = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickoutSide);
        return() => {
            document.removeEventListener('mousedown', handleClickoutSide);
        }
    }, []);

    return (        
        <header>
            <nav className={headerStyll.nav}>
                <div className={headerStyll.navMenu}>
                    <div ref={menuRef} onClick={handleClick} className={`${headerStyll.menu} ${isOpen ? headerStyll.open : ""}`}>
                        {/* this is the setup for the navigation bar */}
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* The logo setup for the small screen */}
                <div className={`${headerStyll.menuList} ${isOpen ? headerStyll.active: ""}`}>
                <div className={headerStyll.logo}>
                    <Image src="/image/header/logo.png" 
                        alt="Home Haven Logo"                           
                        width={32}
                        height={32} 
                        className={headerStyll.image}/>
                    <Typography variant="h5" className={headerStyll.text}>
                        Home Haven
                    </Typography> 
                </div>
                {/* Navigation menu */}
                <ul className={headerStyll.list}>
                     {links.map(({href, label})=>(
                        <li key = {href} onClick={selectNav} className={isSelect? headerStyll.select : headerStyll.navText}>
                           <Link  href={href} > {
                                <Typography variant="h5">
                                {label}
                                </Typography>
                           }</Link>
                       </li>
                   ))}
                </ul>
                </div>
            </nav>
        </header>
    )
}