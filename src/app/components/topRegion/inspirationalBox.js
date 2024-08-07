'use client'

import { Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import json2mq from 'json2mq';
import styles from "./InspirationalBox.module.css";

export default function InspirationalBox() {   
    // Media query to check if the screen width is 1200px or less
    const matches = useMediaQuery(
        json2mq({        
          maxWidth: 1200,
        }),
      );
    // Media query to check if the screen width is 430px or less
    const matchesSmall = useMediaQuery(
        json2mq({        
          maxWidth: 430,
        }),
    );   
  
    return (
       
        <div className={styles.container}>  
        
            <div className={styles.heroTextContainer}>
                <Typography variant={!matches ? "h2" : (!matchesSmall ? "h3" : "h4")}>
                    A perfect match when it comes to homes.   
                </Typography>    
            </div>        
        </div>   
    );
};