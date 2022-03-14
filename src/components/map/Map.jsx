import React, { useRef, useEffect, useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import "./Map.css";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FtaXJhY2hlZCIsImEiOiJja3ljcWN4YjUwNWZlMm9zMjE1bGI2dW0xIn0.4UjM7N4eA-TqIlzCrMFXsw";

export default function Map() {
  const mapContainer = useRef(null);
  const [lng, setLng] = useState(-0.6963224);
  const [lat, setLat] = useState(44.8867549);
  const [zoom, setZoom] = useState(18);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    // Create default markers

    const marker = new mapboxgl.Marker()
      .setLngLat([lng, lat])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          "<style> h2,h3 {text-align:center}</style><h2>Prev33</h2><h3>24 Av. René Descartes</br> 33160 Saint-Médard-en-Jalles</h3><h3>tel: 06 95 23 18 73</h3>"
        )
      )
      .addTo(map);

    marker.togglePopup();

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    map.on("move", () => {
      setLng(map.getCenter().lng.toFixed(4));
      setLat(map.getCenter().lat.toFixed(4));
      setZoom(map.getZoom().toFixed(2));
    });

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div className="map">
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
