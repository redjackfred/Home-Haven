'use client'
import { useState, useEffect, useRef } from "react";
import headerStyll from "./sidebarHeader.module.css"
import Link from "next/link";
import { Typography } from "@mui/material";
import Image from "next/image"
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
import windowsize from "../getWindowSize/getWindowSize";
import styled, {css} from 'styled-components';

export default function SidebarHeader({findhomes}) {
    // State to manage sidebar open/close
    const [isOpen, setIsOpen] = useState(false);
    // State to manage selected navigation item
    const [isSelect, setIsSelect] = useState(false);
    // Reference to the menu element
    const menuRef = useRef(null);
    // Media query to check screen size
    const screensize = useMediaQuery(json2mq({minWidth:1200}));
    const [isload, setIsload] = useState(false);
    // Navigation links
    const links = [
        {href: '/findhomes', label:'Homes'},
        { href: '/agents', label: 'Agents' },
        { href: '/sell', label: 'Sell' },
        { href: '/buy', label: 'Buy' },
        { href: '/message', label: 'Message'},
        { href: '/signIn', label: 'My Homes' }
    ];
    // Get window size
    const{width, height} = windowsize();
    //The css below only take pixel value.
    const widthPx = typeof width === 'number' ? `${width}px` : width;
    console.log(width);
    const ActiveStyles = css`
        position: absolute;
        z-index: 50;
        top:0;
        padding-left: -60px;

        @media (max-width: 430px) {
            top:0;
        }
    `;
    // Styled component for menu list
    const MenuList = styled.div`
        display: flex;
        flex-direction: column;
        position: fixed;
        top: -600px;
        width: 100%;
        align-items: center;
        transition: all 0.4s ease-in-out;
        background-color: #EFFFFC;
        height: 600px;
        box-shadow: 0px 4px 4px #00000030;

        @media (max-width: 430px) {
            top:-500px;
            height: 500px;
        }

        ${(props) => props.isActive && ActiveStyles}
    `;
    // Styled component for menu list in findhomes page
    const MenuListFindhomes = styled(MenuList)`
    left:-33.29px;

    @media (max-width: 430px) {
        top:-520px;
        height: 500px;
        margin-top: -10px;
        width: ${widthPx};
    }

    ${(props) => props.isActive && ActiveStyles}
    `;
    // Toggle menu open/close
    const handleClick = () => {
        setIsOpen(!isOpen);
    }
    // Toggle selected navigation item
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
    // Remove event listener on screen size change
    useEffect(() =>{
        if (screensize) {
            document.removeEventListener('mousedown', closeMenu());
        }
    }, [screensize])

    // Delay component loading
    useEffect(() => {
        setTimeout(()=>{
            setIsload(true);
        }, 1000);
    },[]);

    const MenuComponent = findhomes ? MenuListFindhomes : MenuList;
    return (        
        <header>
            <nav className={headerStyll.nav}>
                <div className={headerStyll.navMenu}>
                    <div ref={menuRef} onClick={handleClick} className={`${findhomes ? headerStyll.menuFindhomes: headerStyll.menu} ${isOpen ? headerStyll.open : ""}`}>
                        {/* this is the setup for the navigation bar. The hamburger icon*/}
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                {/* The logo setup for the small screen. Isload is set to delay the following component loading too fast, which is 
                Unwanted shows on the website. It is delay for about 1s*/}
                {isload ? 
                    <MenuComponent isActive={isOpen}>
                        <Link href="/">
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
                        </Link>
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
                    </MenuComponent> : ""}
            </nav>
           
        </header>
    )
}