"use client";
import styles from "./homeListing.module.css";
import { Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { HomeType } from "@/app/utils/data";
import AssetCard from "../assetCard/assetCard";
import styled, { css } from "styled-components";
import useMediaQuery from "@mui/material/useMediaQuery";
import json2mq from "json2mq";
import { useSearchParams } from "next/navigation";
import { Popup } from "../popup/popup";
import OfferBig from "../offer/OfferBig";
import Offer from "../offer/Offer";

type listing = {
  imgData: string;
  imgAlt: string;
  date: string;
  price: string;
  numberOfBedrooms: number;
  numberOfBaths: number;
  numberOfSqft: string;
  address: string;
};

const listings: listing[] = [];
// store the fake data.
for (let i = 0; i < 8; i++) {
  listings.push({
    imgData: "/image/assetCard/house.png",
    imgAlt: "Placeholder Image",
    date: "4 Feb, 2024",
    price: "$40,999,999",
    numberOfBedrooms: 3,
    numberOfBaths: 2,
    numberOfSqft: "1,568",
    address: "22055 White Stone Road, Marysville OH",
  });
}

export default function HomeListing({
  onListButton,
  filterValues,
}: {
  onListButton: boolean;
  filterValues: Object;
}) {
  // console.log(onListButton);
  const max428 = useMediaQuery(json2mq({ maxWidth: 430 }));
  const [homes, setHomes] = useState<HomeType[]>([]);
  const [isload, setIsload] = useState(false);
  const searchParams = useSearchParams();
  const searchQuery = searchParams && searchParams.get("q");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isOfferOpen, setIsOfferOpen] = useState(false);
  const [submitHomeIDs, setSubmitHomeIDs] = useState([]);
  const [ID, setID] = useState(null);

  function handleSubmit(_id){
    if(!submitHomeIDs.includes(_id)){
      setSubmitHomeIDs([...submitHomeIDs, _id]);
    }
    setIsPopupOpen(false);
    setIsOfferOpen(false);
  }

  const getHomes = async () => {
    try {
      const res = await fetch("/api");
      const data = await res.json();
      setHomes(data);
    } catch (e) {
      console.error(e);
    }
  };

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
      background-color: #effffc;
      z-index: 1;
    }

    @media (max-width: 430px) {
      display: ${listDisplayString};
      box-shadow: none;
      width: 100%;
      background-color: #effffc;
      z-index: 1;
    }
  `;

  const NewListDisplay = styled.div`
    padding-left: 20px;
    padding-top: 10px;
    @media (max-width: 800px) {
      padding-top: 80px;
      color: #0b3650;
      padding-left: 24px;
      max-width: 400px;
    }
  `;
  useEffect(() => {
    getHomes();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsload(true);
    }, 100);
  }, []);

  const filteredHomes = homes.filter((home) => {
    let isNum = /^\d+$/.test(searchQuery);

    if (searchQuery) {
      // If the search query is numeric, check numerical fields
      if (isNum) {
        // Bath room and bed room search
        if (searchQuery.length < 2) {
          return (
            home.bathrooms.toString() === searchQuery ||
            home.bedrooms.toString() === searchQuery
          );
          // Zip code search
        } else if (searchQuery.length === 5) {
          return home.zip_code == searchQuery;
        }
      } else {
        // Search in string fields
        const lowerSearchQuery = searchQuery.toLowerCase();
        return (
          home.address.toLowerCase().includes(lowerSearchQuery) ||
          home.city.toLowerCase().includes(lowerSearchQuery)
        );
      }
    }
    return homes;
  });

  const targetHome = filteredHomes.find((home) => home._id === ID);

  const filteredHomesByFilter = filteredHomes.filter((home) => {
    // Parse the Price filter values
    let priceInRange = true;
    if(filterValues["Price"] !== "") {
        let priceRange = filterValues["Price"].split("-");
        let minPrice = parseInt(priceRange[0]);
        let maxPrice = parseInt(priceRange[1]);
        if(home.price < minPrice || home.price > maxPrice) {
            priceInRange = false;
        }
    }

    // Filter by beds
    // Filter by baths
    if((filterValues["Beds"] !== "" ? home.bedrooms === parseInt(filterValues["Beds"]) : true)
    && (filterValues["Baths"] !== "" ? home.bathrooms === parseInt(filterValues["Baths"]) : true)
    && priceInRange) {
        return home;    
    }
  });

  return (
    <ListingsContainer>
      
      {isload ? (
        <NewListDisplay>
          <Typography variant={max428 ? "h6" : "h4"}>
            Newest listings
          </Typography>
        </NewListDisplay>
      ) : (
        ""
      )}
      <div className={styles.listingCardContainer}>
        {filteredHomesByFilter.map((home, index) => (
          <div onClick={submitHomeIDs.includes(home._id) ? null :
            (e)=>{
            setID(home._id);
            setIsPopupOpen(!isPopupOpen);
            e.stopPropagation();
            }}>
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
            recommended={index <= 2 && true}          
            isSubmit={submitHomeIDs.includes(home._id)}
            onClick={(e) => {
              e.stopPropagation();
              setID(home._id);
              setIsOfferOpen(!isOfferOpen);
            }}            
          />
          </div>
        ))}
        {isPopupOpen && 
        <div className={styles.showOffer} onClick={()=>setIsPopupOpen(false)}>
          <OfferBig home={targetHome} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}/>
        </div>}
        {isOfferOpen &&
        <div className={`${styles.showOffer} ${styles.center}`} onClick={()=>setIsOfferOpen(false)}>          
          <Offer home={targetHome} onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}/>
        </div>
        }
          
      </div>
    </ListingsContainer>
  );
}
