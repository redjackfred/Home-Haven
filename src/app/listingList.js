
'use client'

import { ListItem, Stack } from "@mui/material";
import AssetCard from "./components/assetCard/assetCard";
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import json2mq from "json2mq";

export default function ListingList() {
    const matches = useMediaQuery(
        json2mq({        
          maxWidth: 450,
        }),
      );    

    return (       
        <Stack direction={matches ? "column" : "row"} spacing={5} sx={{overflow: "hidden"}}>
            {Array(matches ? 5 : 8)
                .fill(true)
                .map((index) => (
                    <ListItem id={index} sx={{width: '345px', height: '332px', padding: 0, margin: 0}}>
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
                    </ListItem>
                    )
                )
            }
        </Stack>
    );
};
