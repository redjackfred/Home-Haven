'use client'
import styles from "./page.module.css";
import TopRegion from "./components/topRegion/topRegion";
import { Typography } from "@mui/material";
import TypeCard from "./components/TypeCard/typeCard";
import ListingList from "./listingList.tsx"
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import json2mq from "json2mq";
import HowCanWeHelp from "./components/TypeCard/HowCanWeHelp";
import { useState, useEffect } from "react";
export default function Home() { 
  const [isload, setIsload] = useState(false);
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

  
  useEffect(() => {
      setTimeout(()=>{
          setIsload(true);
      }, 100);
      
  },[]);

  
  return (
    <div>
      {isload ? 
      <div className={styles.container}>           
        <TopRegion/>
        <div className={styles.newestListings}>
          <div className={styles.Newlisting}>
            <Typography variant={matchesMedium ? (matches ? "h6" : "h5") : "h3"} className={styles.typography}>
              Newest listings
            </Typography>         
          </div>
          <div className={styles.listingList}>
            <ListingList/>     
          </div>
          <div className={styles.howCanWeHelp}>
              <HowCanWeHelp/>
            </div>
            <div className={styles.title}>
              <TypeCard />
          </div> 
        </div>
        
      
    </div>:""}  
  </div>
  );
}
