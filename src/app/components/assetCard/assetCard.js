"use client";
import Image from "next/image";
import { useState } from "react";
import styles from "./assetCard.module.css";


export default function AssetCard({
    imgData, 
    imgAlt, 
    date, 
    price, 
    numberOfBedrooms, 
    numberOfBaths, 
    numberOfSqft, 
    address
}) {
    const [isFavorite, setIsFavorite] = useState(false);
    const toggleFavorite = () => {
        setIsFavorite(!isFavorite);
    };
    return (
    <div className={styles.container}>
        <div className={styles['image-container']}>
            <Image 
                src = {imgData}
                imgAlt = {imgAlt}
                layout="fill"
                objectFill = "cover"
            />
            <button className={styles.favorite} onClick = {toggleFavorite}>
                <Image
                    src={isFavorite ? "/image/assetCard/favorite-icon.png" : "/image/assetCard/non-favorite-icon.png"} 
                    alt={isFavorite ? "Remove from favorites" : "Add to favorites"}
                    width = {24}
                    height = {24}
                    />
            </button>
        </div>
        <div className={styles.houseInfo}>
            <div className={styles.date}>{date}</div>
            <div className={styles.price}>{price}</div>
            <div className={styles['house-area']}>
                <span className={styles.number}>{numberOfBedrooms} </span>
                <span>bedrooms</span>
                <span className={styles.dot}></span>
                <span className={styles.number}>{numberOfBaths} </span>
                <span>baths</span>
                <span className={styles.dot}></span>
                <span className={styles.number}>{numberOfSqft} </span>
                <span>sqft</span>
            </div>
            <div className={styles.address}>{address}</div>
        </div>
        
    </div>
    );
}