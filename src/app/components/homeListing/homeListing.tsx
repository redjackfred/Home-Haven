'use client'
import styles from "./homeListing.module.css";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { HomeType } from "@/app/utils/data";
import AssetCard from "../assetCard/assetCard";
import styled, {css} from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';
import json2mq from "json2mq";

type listing = {
    imgData: string,
    imgAlt: string,
    date: string,
    price: string,
    numberOfBedrooms: number,
    numberOfBaths: number,
    numberOfSqft: string,
    address: string
};

const listings: listing[] = [];
// store the fake data.
for (let i = 0; i < 8; i++) {
    listings.push({
        imgData: '/image/assetCard/house.png',
        imgAlt: 'Placeholder Image',
        date: '4 Feb, 2024',
        price: '$40,999,999',
        numberOfBedrooms: 3,
        numberOfBaths: 2,
        numberOfSqft: "1,568",
        address: "22055 White Stone Road, Marysville OH"
    });
}

export default function HomeListing({onListButton}) {
    // console.log(onListButton);
    const max428 = useMediaQuery(json2mq({maxWidth: 430}));
    const [homes, setHomes] = useState<HomeType[]>([]);
    const [isload, setIsload] = useState(false);

    const getHomes = async () => {
        try{
            const res = await fetch("/api");          
            const data = await res.json();
            setHomes(data);         
        }catch(e){
            console.error(e);
        }
    }
    
   

    let listDisplayString = "";
    if (onListButton == false) {
        listDisplayString = "none";
        // console.log(listDisplayString);
    }

    const ListingsContainer = styled.div`
        box-shadow: 5px 0px 10px rgba(0.5, 0.5, 0.5, 0.3);
        width: 50%;
        z-index: 1;
        

        @media (max-width: 1502px) {
            width: 30%;    
            min-width: 372px;
        }

        @media (min-width: 431px) and (max-width: 800px) {
            display: ${listDisplayString};
            box-shadow: none;
            width: 100%;
            background-color: #EFFFFC;
            z-index: 1;
            
        }

        @media (max-width: 430px) {
            display: ${listDisplayString};
            box-shadow: none;
            width: 100%;
            background-color: #EFFFFC;
            z-index: 1;
        }
    `;

        const NewListDisplay = styled.div`
        padding-left: 20px;
        padding-top: 10px;
        @media (max-width: 800px){
            padding-top: 80px;
            color: #0B3650;
            padding-left: 24px;
            max-width: 400px;
        }
        `;
    useEffect(() => {
        getHomes();        
    }, []);

      useEffect(() => {
        setTimeout(()=>{
            setIsload(true);
        }, 100);
    },[]);

    return(
            <ListingsContainer>
            {isload ? 
                <NewListDisplay>
                    <Typography variant={max428? "h6":"h4"} >
                        Newest listings
                    </Typography>
                </NewListDisplay> : ""
            }
            <div className={styles.listingCardContainer}>
                {homes.map((home) => (
                    <AssetCard
                        imgData={home.image_url[0]}
                        imgAlt="Placeholder Image"
                        date="4 Feb, 2024"
                        price={home.price.toString()}
                        numberOfBedrooms={home.bedrooms}
                        numberOfBaths={home.bathrooms}
                        numberOfSqft={home.square_feet.toString()}
                        address={home.address}
                        key={home.id}
                    />
                ))}
            </div>
        </ListingsContainer>
    )
}