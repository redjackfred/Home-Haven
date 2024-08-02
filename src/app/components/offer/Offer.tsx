"use client";
import { useState } from "react";
import AssetCard from "../assetCard/assetCard";
import { HomeType } from "@/app/utils/data";
import { TextField } from "@mui/material";
import styles from "./Offer.module.css";
import { Skeleton } from "@mui/material";

export default function Offer({ home, onSubmit, onClick }: { home: HomeType, onSubmit?: (number) => void, onClick?: (e: React.MouseEvent<HTMLDivElement>) => void }) {
  const [offerPrice, setOfferPrice] = useState(0);
  const [message, setMessage] = useState("");

  function handleClick(){   
    onSubmit(home._id);
  }

  return (
    <div className={styles.container} onClick={onClick}>
      {home ? (       
        <AssetCard
          imgData={home.image_url[0]}
          imgAlt="Placeholder Image"
          date="4 Feb, 2024"
          price={home.price.toString()}
          numberOfBedrooms={home.bedrooms.toString()}
          numberOfBaths={home.bathrooms.toString()}
          numberOfSqft={home.square_feet.toString()}
          address={home.address}
          key={home._id}
          zipCode={home.zip_code}
          city={home.city}         
        />        
      ) : <Skeleton variant="rounded" width={345} height={328}/>}
      <div className={styles.offerAmount}>
        <p>offer amount</p>
        <br/>
        <h2>
          $
          <input
            type="text"
            pattern="[0-9]*"
            className={styles.offerInput}
            value={offerPrice}
            onChange={(e) => {
              if (
                Number(e.target.value) >= 0 &&
                Number(e.target.value) <= Number.MAX_VALUE
              ) {
                setOfferPrice(Number(e.target.value));
              }
            }}
          />
        </h2>
      </div>
      <hr className={styles.divider} />         
      <div className={styles.buttonContainer}>
        <button className={styles.offerButton} onClick={() => setOfferPrice(7500)}>$7,500</button>
        <button className={styles.offerButton} onClick={() => setOfferPrice(8200)}>$8,200</button>
        <button className={styles.offerButton} onClick={() => setOfferPrice(9000)}>$9,000</button>
      </div>

      <TextField
        id="outlined-multiline-flexible"
        label="Message"
        placeholder="Add a message to your proposal"
        multiline
        rows={2}
        fullWidth
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button className={styles.submitButton} onClick={handleClick}>Submit Offer</button>
    </div>
  );
}
