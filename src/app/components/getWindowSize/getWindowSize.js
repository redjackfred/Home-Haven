'use client'
import {useState, useEffect} from 'react';

function getWindowSize() {
    let width = 0
    let height = 0
    if (typeof window !== "undefined") {
        width = window.innerWidth;  
        height = window.innerHeight;
    }
    return {
        width,
        height
    }
}

export default function GetWindowSize() {
    let [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(()=>{
        function resizing() {
            setWindowSize(getWindowSize());
        }

        window.addEventListener('resize', resizing);
        return () =>window.removeEventListener('reset',resizing);
    }, []);

    return windowSize;
}