'use client'
import SearchIcon from "@mui/icons-material/Search";
import { useRef, useState } from "react";
import styles from "./newSearchBox.module.css";
import { usePathname, useRouter } from "next/navigation";
import json2mq from 'json2mq';
import { useMediaQuery } from "@mui/material";

export default function NewSearchBox() {
  const router = useRouter()
  const pathName = usePathname();
  const [inputValue, setInputValue] = useState("");
  const searchInput = useRef(null);

  function handleInputFocus() {
    searchInput.current.classList.add(styles.focus);
  }

  function handleInputUnFocus(){
    searchInput.current.classList.remove(styles.focus);
  }


  function handleOnChange(event){
    const { value } = event.target;
    setInputValue(value);
  }

  function handleKeyPress(event){
    if(event.key === "Enter"){
      event.preventDefault();
      return handleSearch();
    }
  }

  function handleSearch(){    
    return router.push(`${pathName}/?q=${inputValue}`);     
  }

  const matches = useMediaQuery(
    json2mq({        
      minWidth: 431,
    }),
  );  
  

  return (
    <form className={styles.form}>
      <input type="text" className={styles.input} value={inputValue?? ""} onFocus={handleInputFocus} onBlur={handleInputUnFocus} onChange={handleOnChange} onKeyDown={handleKeyPress} placeholder={matches ? "Enter an address, neighborhood, city, or ZIP code" : "Enter an address"} />      
      <div className={styles.icon} ref={searchInput}>
        <SearchIcon
          sx={{
            color: "white",
            backgroundColor: "#14B49C",          
            width: "35px",
            height: "35px",
          }}
          onClick={handleSearch}
        />
      </div>
    </form>
  );
}
