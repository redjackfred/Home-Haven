'use client'

import Image from "next/image";
import styles from "./searchBox.module.css";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchBox() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(term) {    
    console.log(term);
  }

  return (
    <div>     
      <div className={styles.flexContainer}>
        <div className={styles.inputField}>
          <input type="text" className={styles.inputTxt} placeholder="Enter an address, neighborhood, city, or ZIP code"/>
        </div>
        <div className={styles.searchButton}>
            <button type="submit" style={{background: 'transparent', border: 'none'}}>              
            </button>   
        </div>        
      </div>
    </div>
  );
}
