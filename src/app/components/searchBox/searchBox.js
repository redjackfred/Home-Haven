'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import styles from "./searchBox.module.css";
import { Input, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';

export default function SearchBox({displayBorder}) { 
  const matches = useMediaQuery(
    json2mq({        
      minWidth: 400,
    }),
  );  

  return (        
      <div className={styles.container}>      
          {displayBorder ? (         
            <OutlinedInput className={styles.inputTxt} placeholder={matches ? "Enter an address, neighborhood, city, or ZIP code" : "Address, neighborhood, city, or ZIP"} color='primary'/>
          ) : (
            <Input className={styles.inputTxt} placeholder={matches ? "Enter an address, neighborhood, city, or ZIP code" : "Address, neighborhood, city, or ZIP"} disableUnderline />       
          )}   
               
       
          <Button title='searchButton' sx={{ color: 'white', backgroundColor: '#14B49C', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', minWidth: '48px', minHeight: '48px', flexShrink: 0}}>        
            <SearchIcon/>
          </Button>    
      </div>    
  );
}
