'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import styles from "./searchBox.module.css";
import { Input, OutlinedInput, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from 'json2mq';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { WidthFull } from '@mui/icons-material';

export default function SearchBox({displayBorder}) { 
  const matches = useMediaQuery(
    json2mq({        
      minWidth: 431,
    }),
  );  
  const below400 = useMediaQuery(
    json2mq({
      maxWidth:430
    })
  ); 

  const InputTxt = styled.div`
    background-color: white;
    width: 439px;
    border: 1px solid #14B49C;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;   
  
    & input {
        width:388px;
        border: 0px;
        height: 48px;
        font-size: 1rem;
        padding-left: 24px; 
        background-color: transparent;
    }
    
     @media (min-width: 431px) {
      & img{
        display: none;
      }
    }
  `;

  const InputTxtFindhomes = styled.form`
    /* display: flex; */
    position: relative;
    height: 36px;
    width: 100%;
    border: 1px solid #14B49C;
    border-radius: 4px;
    z-index: 2;
    padding-left: 0;
    

    & input {
      width: 85%; 
      border: 0px;
      font-size: 1rem;
      padding: 8px;
      background-color: transparent;
    }
    & input:focus{
      outline: none;
    }
    & img{
      align-items: center;
    }

  

  `;

  const OutlinedInputComponent = below400? InputTxtFindhomes : InputTxt;
    
  return (        
      <div className={styles.container}>
          {displayBorder ? (
            <form>
            <OutlinedInputComponent >              
                <input type="text" placeholder={matches ? "Enter an address, neighborhood, city, or ZIP code" : "Search"} />
                <Link href="#">
                  <Image src="/image/Vector.png" 
                    width={9.33}
                    height={13.33}
                    alt="search icon"
                  ></Image>
                </Link>
              
            </OutlinedInputComponent>
            </form>
          ) : (
            <Input className={styles.inputTxt} placeholder={matches ? "Enter an address, neighborhood, city, or ZIP code" : "Address, neighborhood, city, or ZIP"} disableUnderline />       
          )} 

          <Button title='searchButton' className={(below400 && displayBorder) ? styles.button : ""} sx={{ color: 'white', backgroundColor: '#14B49C', borderTopRightRadius: '8px', borderBottomRightRadius: '8px', borderTopLeftRadius: '0px', borderBottomLeftRadius: '0px', minWidth: '48px', minHeight: '48px', flexShrink: 0}}>        
            <SearchIcon/>
          </Button>    
      </div>    
  );
}
