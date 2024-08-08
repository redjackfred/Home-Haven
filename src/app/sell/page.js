"use client";
import { use, useEffect, useState } from "react";
import NewSearchBox from "../components/searchBox/newSearchBox";
import AssetCard from "../components/assetCard/assetCard";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import { APIProvider } from "@vis.gl/react-google-maps";

export default function Sell() {
  const [homes, setHomes] = useState([]);
  const [zipCode, setZipCode] = useState(-1);
  const searchParams = useSearchParams();

  const searchQuery = searchParams && searchParams.get("q");
  // Function to fetch homes data from API
  const getHomes = async () => {
    try {
      const res = await fetch("/api");
      const data = await res.json();
      setHomes(data);
    } catch (e) {
      console.error(e);
    }
  };
  // Fetch homes data on component mount
  useEffect(() => {
    getHomes();
  }, []);
  
  // Filter homes based on the search query
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

  return (
    <>
      <APIProvider
        apiKey={"AIzaSyCIm_MVTHuuOneXJhD16L4NZ2TOWdew07o"}
        onLoad={() => console.log("Maps API has loaded.")}
        libraries={["marker"]}
      >        
        <div className={styles.container}>
          <h1>Test page for searching</h1>
          <br />
          <NewSearchBox />
          <ul className={styles.posts}>
            {filteredHomes.length > 0 ? (
              filteredHomes.map((home) => (
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
                />
              ))
            ) : (
              <p className={styles.noHome}>No homes found for the query: {searchQuery}</p>
            )}
          </ul>
        </div>
      </APIProvider>
    </>
  );
}
