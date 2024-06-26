'use client'
import Image from "next/image";
import styles from "./page.module.css";
import AssetCard from "./components/assetCard/assetCard";
import TopRegion from "./components/topRegion/topRegion";
import { Typography } from "@mui/material";
import TypeCard from "./components/TypeCard/typeCard";
import ListingList from "./listingList";
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import json2mq from "json2mq";

export default function Home() { 
  const matches = useMediaQuery(
    json2mq({        
      maxWidth: 450,
    }),    
  );  
  const matchesMedium = useMediaQuery(
    json2mq({        
      maxWidth: 1200,
    }),    
  );  

  return (
    <div>           
      <TopRegion/>
      <div className={styles.newestListings}>
        <div className={styles.title}>
          <Typography variant={matchesMedium ? (matches ? "h6" : "h5") : "h3"} className={styles.typography}>
            Newest listings
          </Typography>         
        </div>
        <div className={styles.listingList}>
          <ListingList/>          
        </div>
      </div>
      <div className={styles.howCanWeHelp}>
        <div className={styles.title}>
          <Typography variant="h3">
            How can we help?
          </Typography>
        </div>        
        <TypeCard />
      </div>
    </div>
  );
}
