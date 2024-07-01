import Image from "next/image";
import styles from "./page.module.css";
import AssetCard from "./components/assetCard/assetCard";
import TopRegion from "./components/topRegion/topRegion";
import { Typography } from "@mui/material";
import TypeCard from "./components/TypeCard/typeCard";
import HowCanWeHelp from "./components/TypeCard/HowCanWeHelp";


export default function Home() { 

  return (
    <div>           
      <TopRegion/>
      <div className={styles.newestListings}>
        <div className={styles.title}>
          <Typography variant="h3">
            Newest listings
          </Typography>         
        </div>
        <div className={styles.listingList}>
          <AssetCard
                    imgData={"/image/assetCard/house.png" }
                    imgAlt="Placeholder Image"
                    date="4 Feb, 2024"
                    price="$40,999,999"
                    numberOfBedrooms="3"
                    numberOfBaths="2"
                    numberOfSqft= "1,568"
                    address= "22055 White Stone Road, Marysville OH"
          />
        </div>
      </div>
      
      <div className={styles.howCanWeHelp}>
        <div className={styles.title}>
          <HowCanWeHelp/>
          <TypeCard />
        </div>        
      </div>
      
    </div>
  );
}
