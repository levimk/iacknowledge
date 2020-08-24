import React, { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";


const styles = {
  width: "100vw",
  height: "100vh",
  position: "absolute",
  zIndex: -10,
};

const MapboxGLMap = () => {
  const MELBOURNE = {lat: -37.840935, lng: 144.946457};
  const [map, setMap] = useState(null);
  const [ lat, setLat ] = useState(MELBOURNE.lat);
  const [ lng, setLng ] = useState(MELBOURNE.lng);
  const [ zoom, setZoom ] = useState(2);
  const mapContainer = useRef(null);

  useEffect(() => {
    mapboxgl.accessToken = process.env.mapboxPk;
    const initializeMap = ({ setMap, mapContainer }) => {
      const map = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/streets-v11",
        center: [lng, lat],
        zoom: zoom
      });

      map.on("load", () => {
        setMap(map);
        map.resize();
      });
    };

    if (!map) initializeMap({ setMap, mapContainer });
  }, [map]);

  return (<div ref={el => (mapContainer.current = el)} style={styles} />);
};

export default MapboxGLMap;