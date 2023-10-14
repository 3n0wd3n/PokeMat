import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import { MapApp } from "./Map.style";
import "./Map.css";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDW8iT1wH4Jgh-i54KCca1DCbl2mlwsQSY",
  });
  const center = useMemo(
    () => ({ lat: 49.55919264209095, lng: 17.30524088171907 }),
    []
  );

  return (
    <MapApp>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName='map-container'
          center={center}
          zoom={16}
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </MapApp>
  );
};

export default App;
