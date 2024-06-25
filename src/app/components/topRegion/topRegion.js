'use client'
import styles from "./topRegion.module.css";
import InspirationalBox from "./inspirationalBox";
import SearchBox from "@/app/components/searchBox/searchBox"

export default function TopRegion() {
    return (
        <div className={styles.container}>
            <InspirationalBox />  
            <div className={styles.searchBoxContainer}>
                <SearchBox/>   
            </div>
        </div>
    );
};