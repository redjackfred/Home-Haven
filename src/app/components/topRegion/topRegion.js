'use client'
import styles from "./topRegion.module.css";
import InspirationalBox from "./inspirationalBox";
import SearchBox from "../searchBox/searchBox";
import SidebarHeader from "../sidebar/sidebarHeader";

export default function TopRegion() {
    return (
        <div className={styles.container}>      
            <div className={styles.headerContainer}>
            <SidebarHeader />
            </div>      
            <InspirationalBox />  
            <div className={styles.searchBoxContainer}>
                <SearchBox/>   
            </div>
        </div>
    );
};