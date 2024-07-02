"use client";

import { Grid } from "@mui/material";
import AssetCard from "../components/assetCard/assetCard";

function GridExample() {
  return (
    <Grid container spacing={3}>
      <Grid md={12} xl={6}>
         <div style={{"display":"flex", "justifyContent":"center", "alignItems":"center", "minWidth":"350", "flex":"0 0 auto"}}>
            <AssetCard
            imgData={"/image/assetCard/house.png"}
            imgAlt="Placeholder Image"
            date="4 Feb, 2024"
            price="$40,999,999"
            numberOfBedrooms="3"
            numberOfBaths="2"
            numberOfSqft="1,568"
            address="22055 White Stone Road, Marysville OH"
            />
        </div>
      </Grid>
      <Grid md={12} xl={6}>
         <div style={{"display":"flex", "justifyContent":"center", "minWidth":"350", "flex":"0 0 auto"}}>
            <AssetCard
            imgData={"/image/assetCard/house.png"}
            imgAlt="Placeholder Image"
            date="4 Feb, 2024"
            price="$40,999,999"
            numberOfBedrooms="3"
            numberOfBaths="2"
            numberOfSqft="1,568"
            address="22055 White Stone Road, Marysville OH"
            />
        </div>
      </Grid>
      <Grid md={12} xl={6}>
        <div style={{"display":"flex", "justifyContent":"center", "minWidth":"350", "flex":"0 0 auto"}}>
            <AssetCard
            imgData={"/image/assetCard/house.png"}
            imgAlt="Placeholder Image"
            date="4 Feb, 2024"
            price="$40,999,999"
            numberOfBedrooms="3"
            numberOfBaths="2"
            numberOfSqft="1,568"
            address="22055 White Stone Road, Marysville OH"
            />
        </div>
      </Grid>
      <Grid md={12} xl={6}>
        <div style={{"display":"flex", "justifyContent":"center", "minWidth":"350", "flex":"0 0 auto"}}>
            <AssetCard
            imgData={"/image/assetCard/house.png"}
            imgAlt="Placeholder Image"
            date="4 Feb, 2024"
            price="$40,999,999"
            numberOfBedrooms="3"
            numberOfBaths="2"
            numberOfSqft="1,568"
            address="22055 White Stone Road, Marysville OH"
            />
        </div>
      </Grid>
    </Grid>
  );
}

export default GridExample;
