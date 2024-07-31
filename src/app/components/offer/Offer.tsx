"use client";
import { useState } from "react";
import AssetCard from "../assetCard/assetCard";
import { HomeType } from "@/app/utils/data";
import { TextField } from "@mui/material";
import styles from "./Offer.module.css";

export default function Offer({ home }: { home: HomeType }) {
  const [offerPrice, setOfferPrice] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <div className={styles.container}>
      {home && (
        <AssetCard
          imgData={home.image_url[0]}
          imgAlt="Placeholder Image"
          date="4 Feb, 2024"
          price={home.price.toString()}
          numberOfBedrooms={home.bedrooms}
          numberOfBaths={home.bathrooms}
          numberOfSqft={home.square_feet.toString()}
          address={home.address}
          key={home._id}
          zipCode={home.zip_code}
          city={home.city}
        />
      )}
      <div className={styles.offerAmount}>
        <p>offer amount</p>
        <h1>
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
        </h1>
      </div>
      <hr
        style={{
          width: "100%",
          height: "1px",
          backgroundColor: "black",
          margin: "20px 0",
        }}
      />
      <div className={styles.buttonContainer}>
        <button onClick={() => setOfferPrice(7500)}>$7,500</button>
        <button onClick={() => setOfferPrice(8200)}>$8,200</button>
        <button onClick={() => setOfferPrice(9000)}>$9,000</button>
      </div>

      <TextField
        id="outlined-multiline-flexible"
        label="Message"
        placeholder="Add a message to your proposal"
        multiline
        maxRows={4}
        fullWidth
        margin="normal"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>Submit Offer</button>
    </div>
  );
}
