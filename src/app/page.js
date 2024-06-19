import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head"
import AssetCard from "./components/assetCard/assetCard";


export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="any"/>
      </Head>
      
    <main>
    <AssetCard
            imgData={"/image/assetCard/house.png" }
            imgAlt="Placeholder Image"
            date="4 Feb, 2024"
            price="$40,999,999"
            numberOfBedrooms="3"
            numberOfBaths="2"
            numberOfSqft= "1,568"
            address= "22055 White Stone Road, Marysville OH"
        />

    </main>
    </div>
  );
}
