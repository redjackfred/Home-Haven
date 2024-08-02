'use client'
import { useEffect, useState } from "react";
import OfferBig from "../components/offer/OfferBig";

export default function Buy() {
    const [homes, setHomes] = useState([]);

    const getHomes = async () => {
      try {
        const res = await fetch("/api");
        const data = await res.json();
        setHomes(data);
        console.log(data);
      } catch (e) {
        console.error(e);
      }
    };
  
    useEffect(() => {
      getHomes();   
    }, []);

    return (
        <>
            <h1>Buy Page</h1>
            {homes && homes[23] &&<OfferBig home={homes[23]}/>}
        </>
    );
}