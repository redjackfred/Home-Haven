'use client'
import { Typography } from "@mui/material";
import SearchBox from "../components/searchBox/searchBox";
import styles from "./page.module.css"
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import PoiMarkers from "./poiMarker";

type Poi ={ key: string, location: google.maps.LatLngLiteral }
const locations: Poi[] = [
  {key: 'paintedLadies', location: { lat: 37.77620759443369, lng: -122.43277996388103  }},
  {key: 'USF', location: { lat: 37.7765906497719, lng: -122.45033721057825 }},  
  {key: 'traderJoes', location: { lat: 37.78335565014062, lng: -122.44776777198993 }},  
  {key: 'chinaTown', location: { lat: 37.7963061525071, lng: -122.40536900230657 }},  
  {key: 'wholeFoods', location: { lat: 37.76944978354186, lng: -122.45296457611452 }},  
  {key: 'goodWill', location: { lat: 37.76969532433501, lng: -122.4504232309301 }},  
  {key: 'goldenGatePark', location: { lat: 37.770555211469635, lng: -122.46750884294708 }},  
  {key: 'castro', location: { lat: 37.76091977542431, lng: -122.43499102109526 }},  
  {key: 'sunset', location: { lat: 37.7521173057647, lng: -122.48671685777316 }},  
  {key: 'chaseCenter', location: { lat: 37.76806975668889, lng: -122.38773616870792 }},  
  {key: 'sunset2', location: { lat: 37.75384480789679,  lng: -122.48380366818245 }},  
  {key: 'sunset3', location: { lat: 37.75254918511742, lng: -122.4925432374971 }},  
];


export default function FindHomes() {
    return (
        <div className={styles.container}>     
            <APIProvider apiKey={'API-KEY'} onLoad={() => console.log('Maps API has loaded.')}>  
            <div className={styles.searchFilterContainer}>
                <SearchBox displayBorder/>
                {/* Add dropdown buttons here*/}
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.mapContainer}>
                <Map
                    defaultZoom={12.5}
                    defaultCenter={ { lat: 37.766338623365684, lng: -122.44773195354642 } }
                    mapId='DEMO_MAP_ID'
                    onCameraChanged={ (ev) =>
                        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                    }>
                    <PoiMarkers pois={locations} />
                </Map>        
                </div>
                <div className={styles.listingsContainer}>
                    <Typography variant="h4" margin={'16px'}>
                        Newest listings
                    </Typography>
                    {/* Add assetCard list here */}
                </div>
            </div>
            </APIProvider>
        </div>
    );
}