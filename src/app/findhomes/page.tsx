"use client";
import { SelectChangeEvent, Typography } from "@mui/material";
import SearchBox from "../components/searchBox/searchBox";
import styles from "./page.module.css";
import {
  AdvancedMarker,
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  Pin,
} from "@vis.gl/react-google-maps";
import PoiMarkers from "./poiMarker";
import Image from "next/image";
import FilterButton from "../components/filterButton/filterButton";
import SidebarHeader from "../components/sidebar/sidebarHeader";
import Link from "next/link";
import styled, { css } from "styled-components";
import { useEffect, useState, useRef } from "react";
import ToggleButtons from "../components/toggleComponents/toggleButton";
import HomeListing from "../components/homeListing/homeListing";
import windowsize from "../components/getWindowSize/getWindowSize";
import useMediaQuery from "@mui/material/useMediaQuery";
import NewSearchBox from "../components/searchBox/newSearchBox";

type Poi = { key: string; location: google.maps.LatLngLiteral };
const locations: Poi[] = [
  {
    key: "paintedLadies",
    location: { lat: 37.77620759443369, lng: -122.43277996388103 },
  },
  { key: "USF", location: { lat: 37.7765906497719, lng: -122.45033721057825 } },
  {
    key: "traderJoes",
    location: { lat: 37.78335565014062, lng: -122.44776777198993 },
  },
  {
    key: "chinaTown",
    location: { lat: 37.7963061525071, lng: -122.40536900230657 },
  },
  {
    key: "wholeFoods",
    location: { lat: 37.76944978354186, lng: -122.45296457611452 },
  },
  {
    key: "goodWill",
    location: { lat: 37.76969532433501, lng: -122.4504232309301 },
  },
  {
    key: "goldenGatePark",
    location: { lat: 37.770555211469635, lng: -122.46750884294708 },
  },
  {
    key: "castro",
    location: { lat: 37.76091977542431, lng: -122.43499102109526 },
  },
  {
    key: "sunset",
    location: { lat: 37.7521173057647, lng: -122.48671685777316 },
  },
  {
    key: "chaseCenter",
    location: { lat: 37.76806975668889, lng: -122.38773616870792 },
  },
  {
    key: "sunset2",
    location: { lat: 37.75384480789679, lng: -122.48380366818245 },
  },
  {
    key: "sunset3",
    location: { lat: 37.75254918511742, lng: -122.4925432374971 },
  },
];

const SignIn = styled.div`
  display: flex;
  align-items: center;
  color: #14b49c;
  margin-left: 8px;
  width: 44px;
`;

const FilterButtonContainer = styled.div`
  display: none;
  position: absolute;
  top: 20px;
  right: 24px;
  border-radius: 5px;
  border: #14b49c solid 1px;
  background-color: #effffc;
  z-index: 2;
  @media (max-width: 800px) {
    display: block;
  }
`;

export default function FindHomes() {
  const [lattitude, setLattitude] = useState(37.766338623365684);
  const [longitude, setLongitude] = useState(-122.44773195354642);
  const [focus, setFocus] = useState(12.5);
  const [isload, setIsload] = useState(false);
  const [isMapButtonActive, setIsMapButtonActive] = useState(true); //lift up states between components.
  const max1502 = useMediaQuery("(max-width:1502px)");
  const [filterValues, setFilterValues] = useState({
    Price: "",
    Beds: "",
    Baths: "",
    HomeType: "",
    More: "",
  });

  const handleFilterButtonClick = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;

    setFilterValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMapButtonClick = () => {
    setIsMapButtonActive(!isMapButtonActive);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsload(true);
    }, 100);
  }, []);

  const newStyle = {
    mapContainer: {
      width: "70%",
    },
  };

  let mapDisplayString = "";
  if (!isMapButtonActive) {
    mapDisplayString = "none";
  }

  // console.log(isMapButtonActive);
  return (
    <div className={styles.container}>
      <APIProvider
        apiKey={"AIzaSyCIm_MVTHuuOneXJhD16L4NZ2TOWdew07o"}
        onLoad={() => console.log("Maps API has loaded.")}
        libraries={["marker"]}
      >
        <div className={styles.searchFilterContainer}>
          {isload ? (
            <div className={styles.searchContainer}>
              <SidebarHeader findhomes={true} />
              <Link href="/">
                <Image
                  src="/image/header/logo.png"
                  alt="Home Haven Logo"
                  width={32}
                  height={32}
                  className={styles.logo}
                />
              </Link>
              <NewSearchBox />
              {/* <SearchBox displayBorder/> */}
              <Link href="/signIn" className={styles.signIn}>
                <Typography variant="subtitle2">
                  <SignIn>Sign in</SignIn>
                </Typography>
              </Link>
            </div>
          ) : (
            ""
          )}
          {/* Add dropdown buttons here*/}
          <div className={styles.filterButtonContainer}>
            <FilterButton
              title="Price"
              name="Price"
              items={[
                "",
                "0-100000",
                "100000-500000",
                "500000-1000000",
                "1000000-1500000",
                "1500000-2000000",
                "2000000-2500000",
                "2500000-3000000",
                "3000000-3500000",
                "3500000-4000000",
              ]}
              values={filterValues}
              onSelectionChange={handleFilterButtonClick}
            />
            <FilterButton
              title="Beds"
              name="Beds"
              items={[
                "",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
              ]}
              values={filterValues}
              onSelectionChange={handleFilterButtonClick}
            />
            <FilterButton
              title="Baths"
              name="Baths"
              items={[
                "",
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
              ]}
              values={filterValues}
              onSelectionChange={handleFilterButtonClick}
            />
            <FilterButton
              title="Home Type"
              name="HomeType"
              items={[
                "",
                "Single Family House",
                "Condo",
                "Apartment",
                "Duplex",
                "Town House",
              ]}
              values={filterValues}
              onSelectionChange={handleFilterButtonClick}
            />
            <FilterButton
              title="More"
              name="More"
              items={[
                "",
                "Allow Dogs",
                "Allow Cats",
                "In-unit laundry",
                "Microwaver",
                "A/C included",
                "Has basement",
                "Mountain view",
                "Park view",
                "Water view",
              ]}
              values={filterValues}
              onSelectionChange={handleFilterButtonClick}
            />
          </div>
        </div>
        <div className={styles.contentContainer}>
          <ToggleButtons
            OnMapButtonClick={handleMapButtonClick}
            mapStatus={isMapButtonActive}
          />{" "}
          {/* This is a toggleButtons on the google map */}
          <FilterButtonContainer>
            {isload ? (
              <FilterButton
                title="Filters"
                name="filters"
                items={["Price", "Beds & Baths", "Home Type", "More"]}
                values={filterValues}
              />
            ) : (
              ""
            )}
          </FilterButtonContainer>
          <div id="mapContainer">
            <Map
              mapId={"bf51a910020fa25a"}
              defaultZoom={focus}
              defaultCenter={{ lat: lattitude, lng: longitude }}
              gestureHandling={"greedy"}
              disableDefaultUI
            >
              <PoiMarkers pois={locations} />
            </Map>
            {/* NextJs'way to write css */}
          </div>
          <style jsx>
            {`
              #mapContainer {
                width: 50%;
              }
              @media (max-width: 1502px) {
                #mapContainer {
                  width: 70%;
                }
              }
              @media (max-width: 800px) {
                #mapContainer {
                  display: ${mapDisplayString};
                  width: 100%;
                }
              }
              @media (max-width: 430px) {
                #mapContainer {
                  display: ${mapDisplayString};
                  width: 100%;
                }
              }
            `}
          </style>
          <HomeListing onListButton={!isMapButtonActive} filterValues={filterValues}/>
        </div>
      </APIProvider>
    </div>
  );
}
