import { useEffect, useRef, useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";

export default function Map({ latitude, longitude }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyAc2-6XkVKxTCtRSMWZvuFc-EBkhrJh3dY",
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <MapStuff latitude={latitude} longitude={longitude} />;
}

function MapStuff({ latitude, longitude }) {
  const center = useMemo(() => ({ lat: latitude, lng: longitude }), []);
  return (
    <div className="flex flex-col justify-center items-center">
      <p className="font-bold text-white mt-5 mb-3 text-xl">Launch Site</p>
      <GoogleMap zoom={2} center={center} mapContainerClassName="map-container">
        <MarkerF position={center}></MarkerF>
      </GoogleMap>
    </div>
  );
}
