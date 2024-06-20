import Image from "next/image";
import styles from "./topRegion.module.css";
import InspirationalPhrase from "./inspirationalPhrase";
import SearchBox from "./searchBox";

export default function TopRegion() {
    return (
        <div className={styles.container}>
            <div className={styles.inspirationalPhrase}>
                <InspirationalPhrase />                
            </div>
            <div className={styles.searchBox}>
                <SearchBox defaultValue={"San Francisco Condo"}/>        
            </div>    
        </div>
    );
};