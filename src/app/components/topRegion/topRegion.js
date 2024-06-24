'use client'
import styles from "./topRegion.module.css";
import InspirationalBox from "./inspirationalBox";
import SearchBox from "./searchBox";

export default function TopRegion() {
    return (
        <div className={styles.container}>
            <InspirationalBox />  
            <SearchBox/>   
        </div>
    );
};