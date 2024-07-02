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
      position={{ lat: 37.796338623365684, lng: -122.41773195354642 }}
      title={title || "AdvancedMarker with custom html content."}
    >
      <div
        style={{
          width: 20,
          height: 20,
          position: "absolute",
          top: 0,
          left: 0,
          background: "#1dbe80",
          border: "2px solid #0e6443",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
        }}
      ></div>
      <InfoWindow
        position={{ lat: lattidue, lng: longitude }}
        headerDisabled
        maxWidth={200}
      >
        <Image
          src={image}
          alt="House Image"
          width={100}
          height={100}
        />
      </InfoWindow>
    </AdvancedMarker>
  );
}
