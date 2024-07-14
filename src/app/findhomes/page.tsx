'use client'
import { Typography } from "@mui/material";
import SearchBox from "../components/searchBox/searchBox";
import styles from "./page.module.css"
import { AdvancedMarker, APIProvider, InfoWindow, Map, Marker, Pin } from '@vis.gl/react-google-maps';
import PoiMarkers from "./poiMarker";
import AssetCard from "../components/assetCard/assetCard";
import GridExample from "./gridExample.js"
import Image from "next/image";
import CustomMarker from "../components/googleMap/marker";
import FilterButton from "../components/filterButton/filterButton";
//
import SidebarHeader from "../components/sidebar/sidebarHeader";
import Link from "next/link";
import styled, {css} from "styled-components";
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded';
import { useEffect, useState } from "react";
import { HomeType } from "../utils/data";

type Poi = { key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
    { key: 'paintedLadies', location: { lat: 37.77620759443369, lng: -122.43277996388103 } },
    { key: 'USF', location: { lat: 37.7765906497719, lng: -122.45033721057825 } },
    { key: 'traderJoes', location: { lat: 37.78335565014062, lng: -122.44776777198993 } },
    { key: 'chinaTown', location: { lat: 37.7963061525071, lng: -122.40536900230657 } },
    { key: 'wholeFoods', location: { lat: 37.76944978354186, lng: -122.45296457611452 } },
    { key: 'goodWill', location: { lat: 37.76969532433501, lng: -122.4504232309301 } },
    { key: 'goldenGatePark', location: { lat: 37.770555211469635, lng: -122.46750884294708 } },
    { key: 'castro', location: { lat: 37.76091977542431, lng: -122.43499102109526 } },
    { key: 'sunset', location: { lat: 37.7521173057647, lng: -122.48671685777316 } },
    { key: 'chaseCenter', location: { lat: 37.76806975668889, lng: -122.38773616870792 } },
    { key: 'sunset2', location: { lat: 37.75384480789679, lng: -122.48380366818245 } },
    { key: 'sunset3', location: { lat: 37.75254918511742, lng: -122.4925432374971 } },
];

type listing = {
    imgData: string,
    imgAlt: string,
    date: string,
    price: string,
    numberOfBedrooms: number,
    numberOfBaths: number,
    numberOfSqft: string,
    address: string
}

const listings: listing[] = [];
// store the fake data.
for (let i = 0; i < 8; i++) {
    listings.push({
        imgData: '/image/assetCard/house.png',
        imgAlt: 'Placeholder Image',
        date: '4 Feb, 2024',
        price: '$40,999,999',
        numberOfBedrooms: 3,
        numberOfBaths: 2,
        numberOfSqft: "1,568",
        address: "22055 White Stone Road, Marysville OH"
    });
}

const SignIn = styled.div`
    display: flex;
    align-items: center;
    color : #14B49C;
    margin-left: 8px;
    width: 44px;
`;


const MappositionButton = css`
    background-color: #EFFFFC;
    border: 1px solid #14B49C;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    position: absolute;
    margin-top: 20px;
    margin-left: 24px;
    width: 40px;
    height: 40px;
    padding: 6px;
    color: #14B49C;
    z-index: 1;
`
const ListpositionButton = css`
    background-color: #EFFFFC;
    border: 1px solid #14B49C;
    border-top-right-radius:6px;
    border-bottom-right-radius:6px;
    margin-top: 20px;
    margin-left: 64px;
    width: 40px;
    height: 40px;
    padding: 6px;
    position: absolute;
    color: #14B49C;
    z-index: 1;
`

const MapButton = styled.button`
    ${MappositionButton}
`;
const ListButton = styled.button`
    ${ListpositionButton}
`;

export default function FindHomes() {
    const [lattitude, setLattitude] = useState(37.766338623365684);
    const [longitude, setLongitude] = useState(-122.44773195354642);
    const [focus, setFocus] = useState(12.5);
    const handleMarkerClick = (latitude, longitude) => {
        // Update the map center and zoom based on the marker clicked
        setLattitude(latitude);
        setLongitude(longitude);
        // Update the zoom level if necessary
        setFocus(13.5);
    };

    const [homes, setHomes] = useState<HomeType[]>([]);

    const getHomes = async () => {
        try{
            const res = await fetch("/api");          
            const data = await res.json();
            setHomes(data);         
        }catch(e){
            console.error(e);
        }
    }

    useEffect(() => {
        getHomes();        
    }, []);

    
    return (
        <div className={styles.container}>          
            <APIProvider apiKey={"AIzaSyCIm_MVTHuuOneXJhD16L4NZ2TOWdew07o"} onLoad={() => console.log('Maps API has loaded.')} libraries={['marker']}>
                <div className={styles.searchFilterContainer}>
                    <div className={styles.searchContainer}>
                        <SidebarHeader findhomes={true}/>
                        <Link href="/" >
                            <Image src="/image/header/logo.png" 
                                alt="Home Haven Logo"                           
                                width={32}
                                height={32}
                                className={styles.logo}
                            /> 
                        </Link>
                        <SearchBox displayBorder/>
                        <Link href="/signIn" className={styles.signIn}>
                            <Typography variant="subtitle2">
                                <SignIn>
                                    Sign in
                                </SignIn>
                            </Typography>
                        </Link>
                    </div>
                    {/* Add dropdown buttons here*/}
                    <div className={styles.filterButtonContainer}>
                        <FilterButton title="Price" items={["0-1000", "1000-2000", "2000-3000", "3000-4000", "4000-5000", "4000-5000", "5000-6000", "6000-7000"]} />
                        <FilterButton title="Beds & Baths" items={["1B/1B", "1B/2B", "2B/1B", "2B/2B", "1B/3B", "3B/1B", "3B/3B"]} />
                        <FilterButton title="Home Type" items={["Single Family House", "Condo", "Apartment", "Duplex", "Town House"]} />
                        <FilterButton title="More" multiple={true} items={["Allow Dogs", "Allow Cats", "In-unit laundry", "Microwaver", "A/C included", "Has basement", "Mountain view", "Park view", "Water view"]} />
                    </div>
                </div>
                <div className={styles.contentContainer}>
                    <div className={styles.mapContainer}>
                        <div>
                        <MapButton>
                            <MapOutlinedIcon></MapOutlinedIcon>
                        </MapButton>
                        <ListButton>
                            <FormatListBulletedRoundedIcon></FormatListBulletedRoundedIcon>
                        </ListButton>
                        </div>
                        <Map
                            mapId={'bf51a910020fa25a'}
                            defaultZoom={focus}
                            defaultCenter={{ lat: lattitude, lng: longitude }}
                            gestureHandling={'greedy'}
                            disableDefaultUI>
                            <PoiMarkers pois={locations} />
                            {/* advanced marker with html-content */}
                            {/* <CustomMarker lattidue={37.796338623365684} longitude={-122.44773195354642} title="This is a title" image="/image/houses/House1.png" />            
                            <CustomMarker lattidue={37.796338623365684} longitude={-122.41773195354642} title="This is a title" image="/image/houses/House2.png" />     
                            <CustomMarker lattidue={37.746338623365684} longitude={-122.41773195354642} title="This is a title" image="/image/houses/House3.png" />     
                            <CustomMarker lattidue={37.756338623365684} longitude={-122.42773195354642} title="This is a title" image="/image/houses/House4.png" />   
                            <CustomMarker lattidue={37.766338623365684} longitude={-122.40773195354642} title="This is a title" image="/image/houses/House5.png" />   
                            <CustomMarker lattidue={37.746338623365684} longitude={-122.39773195354642} title="This is a title" image="/image/houses/House6.png" />    */}
                        </Map>
                    </div>
                    <div className={styles.listingsContainer}>
                        <Typography variant="h4" margin={'16px'}>
                            Newest listings
                        </Typography>
                        <div className={styles.listingCardContainer}>
                            {homes.map((home) => (
                                <AssetCard
                                    imgData={home.image_url[0]}
                                    imgAlt="Placeholder Image"
                                    date="4 Feb, 2024"
                                    price={home.price.toString()}
                                    numberOfBedrooms={home.bedrooms}
                                    numberOfBaths={home.bathrooms}
                                    numberOfSqft={home.square_feet.toString()}
                                    address={home.address}
                                    key={home.id}
                                />
                            ))}


                            {/* {listings.map((listing, index) =>
                                <AssetCard
                                    imgData={listing.imgData}
                                    imgAlt="Placeholder Image"
                                    date="4 Feb, 2024"
                                    price="$40,999,999"
                                    numberOfBedrooms="3"
                                    numberOfBaths="2"
                                    numberOfSqft="1,568"
                                    address="22055 White Stone Road, Marysville OH"
                                    key={index}
                                />
                            )} */}
                        </div>
                    </div>
                </div>
            </APIProvider>
        </div>
    );
}