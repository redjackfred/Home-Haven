import { AdvancedMarker, InfoWindow, Marker, Pin } from '@vis.gl/react-google-maps';
import Image from "next/image";

export default function CustomMarker({
  lattidue, longitude, title, image,
}: {
  lattidue: number;
  longitude: number;
  title?: string;
  image?: string;
}) {
  return (
    <AdvancedMarker
      position={{ lat: lattidue, lng: longitude }}
      title={title || "AdvancedMarker with custom html content."}
    >
      <div
        style={{
          width: 26,
          height: 26,
          position: "absolute",
          top: 0,
          left: 0,
          background: "#0B3650",
          border: "5px solid #FFFFFF",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",  
          boxShadow: "0px 0px 5px 0px #000000",
        }}
      ></div>
      <InfoWindow
        position={{ lat: lattidue, lng: longitude }}
        headerDisabled
        maxWidth={200}
        style={{padding: 0}}
        disableAutoPan = {true}
      >
        <div>
        <Image
          src={image}
          alt="House Image"        
          height={130}
          width={130}          
        />
        </div>
        <p>$3000</p>
        <p>2 beds, 2 baths</p>        
      </InfoWindow>
    </AdvancedMarker>
  );
}
