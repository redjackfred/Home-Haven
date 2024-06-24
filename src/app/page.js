import Image from "next/image";
import styles from "./page.module.css";
import AssetCard from "./components/assetCard/assetCard";
import TopRegion from "./components/topRegion/topRegion";
import TypeCard from "./components/TypeCard/typeCard";

export default function Home() {
  return (
    <div>           
      <TopRegion/>
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
      <TypeCard />
      
    </div>
  );
}
