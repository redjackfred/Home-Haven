"use client";
import { Suspense, useEffect, useState } from "react";
import NewSearchBox from "../components/searchBox/newSearchBox";
import AssetCard from "../components/assetCard/assetCard";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";

export default function Sell() {
  const [homes, setHomes] = useState([]);
  const searchParams = useSearchParams();

  const searchQuery = searchParams && searchParams.get("q");

  const getHomes = async () => {
    try {
      const res = await fetch("/api");
      const data = await res.json();
      setHomes(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getHomes();
  }, []);

  const filteredHomes = homes.filter((home) => {   
    const numericQuery = parseFloat(searchQuery);
    const isNumeric = !isNaN(numericQuery);   
    
    if(searchQuery){  
         // If the search query is numeric, check numerical fields  
        if (isNumeric) {  
            return home.bathrooms.toString() === searchQuery || home.bedrooms.toString() === searchQuery;  
        } else {  
            // Search in string fields  
            const lowerSearchQuery = searchQuery.toLowerCase();  
            return home.address.toLowerCase().includes(lowerSearchQuery) ||  
                   home.city.toLowerCase().includes(lowerSearchQuery);  
        }           
    }    
    return homes;
  });

  return (
    <>
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
            <Suspense>
            <p>No homes found for the query: {searchQuery}</p>
            </Suspense>
          )}
        </ul>
      </div>
    </>
  );
}
