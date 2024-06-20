'use client'
import { useState } from "react";
import vector from "/public/image/header/Vector.png"
import headerStyll from "./header.module.css"
import Link from "next/link";

export default function AltHeader() {
    const [altHeader, setAltHeader] = useState(false);

    const handleClick = () => {
        setAltHeader(!altHeader);
    }
    return (
        <>
            <main className={headerStyll.alter}>
                <div className={`${headerStyll.newHeader} ${altHeader ? headerStyll.show : ''}`}>
                <button onMouseOver={handleClick}>
                    <Link href="/"><img src={vector.src} alt="verctor"/></Link>
                </button>
                </div>
            
            </main>
        </>
    )
}