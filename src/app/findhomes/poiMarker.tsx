import { Marker, MarkerClusterer } from "@googlemaps/markerclusterer";
import { AdvancedMarker, InfoWindow, Pin, useMap } from "@vis.gl/react-google-maps";
import { useEffect, useRef, useState } from "react";
import AssetCard from "../components/assetCard/assetCard";


type Poi = { key: string, location: google.maps.LatLngLiteral }

export default function PoiMarkers(props: { pois: Poi[] }) {
  const map = useMap();
  const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
  const clusterer = useRef<MarkerClusterer | null>(null);

  // Initialize MarkerClusterer, if the map has changed
  useEffect(() => {
    if (!map) return;
    if (!clusterer.current) {
      clusterer.current = new MarkerClusterer({ map });
    }
  }, [map]);

  // Update markers, if the markers array has changed
  useEffect(() => {
    clusterer.current?.clearMarkers();
    clusterer.current?.addMarkers(Object.values(markers));
  }, [markers]);

  const setMarkerRef = (marker: Marker | null, key: string) => {
    if (marker && markers[key]) return;
    if (!marker && !markers[key]) return;

    setMarkers(prev => {
      if (marker) {
        return { ...prev, [key]: marker };
      } else {
        const newMarkers = { ...prev };
        delete newMarkers[key];
        return newMarkers;
      }
    });
  };

  return (
    <>
      {props.pois.map((poi: Poi) => (
        <AdvancedMarker
          key={poi.key}
          position={poi.location}
          ref={marker => setMarkerRef(marker, poi.key)}
          clickable={true}
          onClick={() => {            
            document.querySelectorAll(".cardsInMap").forEach((card) => card.setAttribute("style", "display: none;"));
            document.getElementById(poi.key)?.setAttribute("style", "display: block;");
              console.log(poi.key + " has been clicked");
          }}
        >
          <div
            style={{
              width: 24,
              height: 24,
              display: "block",
              position: "absolute",
              background: "#0B3650",
              border: "4px solid #FFFFFF",
              borderRadius: "50%",
              boxShadow: "0px 0px 5px 0px #000000",
            }}
          ></div>
          <div style={{
            width: 350,
            height: 100,
            position: "absolute",
            top: -350,
            left: -175,
            display: "none",
          }} id={poi.key} className="cardsInMap">
            <AssetCard
              imgData={"/image/houses/House5.png"}
              imgAlt="Placeholder Image"
              date="4 Feb, 2024"
              price="$40,999,999"
              numberOfBedrooms="3"
              numberOfBaths="2"
              numberOfSqft="1,568"
              address="22055 White Stone Road, Marysville OH"
            />
          </div>
        </AdvancedMarker>
      ))}
    </>
  );
};