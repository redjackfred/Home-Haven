"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./assetCard.module.css";
import { Typography } from "@mui/material";

function addCommas(nStr) {
  nStr += "";
  var x = nStr.split(".");
  var x1 = x[0];
  var x2 = x.length > 1 ? "." + x[1] : "";
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, "$1" + "," + "$2");
  }
  return x1 + x2;
}

export default function AssetCard({
  imgData,
  imgAlt,
  date,
  price,
  numberOfBedrooms,
  numberOfBaths,
  numberOfSqft,
  address,
  city,
  zipCode,
  recommended,
  isSubmit,  
  onClick,
}: {
  imgData: string;
  imgAlt: string;
  date: string;
  price: string;
  numberOfBedrooms: string;
  numberOfBaths: string;
  numberOfSqft: string;
  address: string;
  city: string;
  zipCode: string;
  recommended?: boolean; 
  isSubmit?: boolean;
  onClick?: (number) => void;
}) {
  const [isFavorite, setIsFavorite] = useState(false);
  

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <div
      className={recommended ? styles.containerRecommended : styles.container}
    >
      <div className={styles["image-container"]}>
        {recommended && (
          <div className={styles.recommendedIcon}>
            <Typography variant="subtitle2">Recommended</Typography>
          </div>
        )}
        <img
          src={imgData}
          alt={imgAlt}
          width={345}
          height={200}
          style={{ objectFit: "cover" }}
        />
        <button className={styles.favorite} onClick={toggleFavorite}>
          <Image
            src={
              isFavorite
                ? "/image/assetCard/favorite-icon.png"
                : "/image/assetCard/non-favorite-icon.png"
            }
            alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className={styles.houseInfo}>
        <div className={styles.date}>{date}</div>
        <div className={styles.price}>
          <Typography variant="h6">${addCommas(price)}</Typography>
        </div>
        <div className={styles["house-area"]}>
          <span className={styles.number}>{numberOfBedrooms} </span>
          <span>bedrooms</span>
          <span className={styles.dot}></span>
          <span className={styles.number}>{numberOfBaths} </span>
          <span>baths</span>
          <span className={styles.dot}></span>
          <span className={styles.number}>{numberOfSqft} </span>
          <span>sqft</span>
        </div>
        <div
          className={styles.address}
        >{`${address}, ${city}, ${zipCode}`}</div>
      </div>
      {recommended && <button onClick={onClick} className={isSubmit ? styles.buttonSubmitted : styles.button}>{isSubmit? "Offer Submitted" : "Submit offer"}</button>}
    </div>
  );
}
