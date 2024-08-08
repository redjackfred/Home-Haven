'use client'
import {useState, useEffect} from 'react';

// Function to get the current window size
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
    // State to store the window size
    let [windowSize, setWindowSize] = useState(getWindowSize());
    // Effect to update window size on resize
    useEffect(()=>{
        function resizing() {
            setWindowSize(getWindowSize());
        }
        // Add event listener for window resize
        window.addEventListener('resize', resizing);
        // Clean up event listener on component unmount
        return () =>window.removeEventListener('reset',resizing);
    }, []);
    // Return the current window size
    return windowSize;
}