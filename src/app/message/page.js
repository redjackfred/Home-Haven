"use client";
import { useEffect, useState } from "react";
import Offer from "../components/offer/Offer";

export default function Message() {
  const [homes, setHomes] = useState([]);

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

  return (
    <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>    
      {/* <h1>Message Page</h1> */}
      <Offer home={homes[0]} />
    </div>
  );
}
