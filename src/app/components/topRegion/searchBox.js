'use client'
import styles from "./searchBox.module.css";

export default function SearchBox() { 
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
