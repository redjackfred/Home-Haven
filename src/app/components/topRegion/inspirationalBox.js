'use client'

import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import json2mq from 'json2mq';
import styles from "./InspirationalBox.module.css";

export default function InspirationalBox() {   
    const matches = useMediaQuery(
        json2mq({        
          maxWidth: 1200,
        }),
      );    

    return (
        <div className={styles.container}>  
            <div className={styles.heroTextContainer}>
                <Typography variant={matches ? "h4" : "h2"}>
                    A perfect match when it comes to homes.   
                </Typography>    
            </div>          
        </div>    
    );
};