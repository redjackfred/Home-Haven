import { Typography } from "@mui/material";
import SearchBox from "@/app/components/searchBox/searchBox";
import styles from "./page.module.css"
import AltHeader from "@/app/components/header/altHeader";

export default function FindHomes() {
    return (
        <div className={styles.container}>            
            <div className={styles.searchFilterContainer}>
                <SearchBox displayBorder/>
                {/* Add dropdown buttons here*/}
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.mapContainer}>
                    {/* Add Google Map here */}
                </div>
                <div className={styles.listingsContainer}>
                    <Typography variant="h4" margin={'16px'}>
                        Newest listings
                    </Typography>
                    {/* Add assetCard list here */}
                </div>
            </div>
        </div>
    );
}