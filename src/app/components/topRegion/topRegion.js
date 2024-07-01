'use client'
import styles from "./topRegion.module.css";
import InspirationalBox from "./inspirationalBox";
import SearchBox from "../searchBox/searchBox";
import AltHeader from "../header/altHeader";

export default function TopRegion() {
    return (
        <div className={styles.container}>      
            <div className={styles.headerContainer}>
                <AltHeader/>
            </div>      
            <InspirationalBox />  
            <div className={styles.searchBoxContainer}>
                <SearchBox/>   
            </div>
        </div>
    );
};