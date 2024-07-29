"use client";

import { ListItem, Stack } from "@mui/material";
import AssetCard from "./components/assetCard/assetCard";
import useMediaQuery from "@mui/material/useMediaQuery";
import * as React from "react";
import json2mq from "json2mq";
import { HomeType } from "./utils/data";

export default function ListingList() {
  const matches = useMediaQuery(
    json2mq({
      maxWidth: 450,
    })
  );
  const [homes, setHomes] = React.useState<HomeType[]>([]);

  const getHomes = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setHomes(data);
  }

  React.useEffect(() => {
      getHomes();
  }, []);

  return (
    <Stack
      direction={matches ? "column" : "row"}
      spacing={5}
      // sx={{ overflow: "hidden" }}
    >
      {homes.map((home) => (
        <ListItem
        key={home.id}
          sx={{ width: "345px", height: "332px", padding: 0, margin: 0 }}
        >
          <AssetCard
            imgData={home.image_url[0]}
            imgAlt="Placeholder Image"
            date="4 Feb, 2024"
            price={home.price.toString()}
            numberOfBedrooms={home.bedrooms}
            numberOfBaths={home.bathrooms}
            numberOfSqft={home.square_feet.toString()}
            address={home.address}  
            city={home.city}
            zipCode={home.zip_code}          
          />
        </ListItem>
      ))}    
    </Stack>
  );
}
