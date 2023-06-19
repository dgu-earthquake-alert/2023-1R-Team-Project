import { useEffect, useRef } from "react";
import { fetchMapPlaceData } from "../../utils/api";
import { Link, Outlet } from "react-router-dom";
import markerImage from "../../assets/images/marker.png";
import styles from "./styles/main.module.css";

const AboutMain = ({ map, setMap }) => {
  const ref = useRef();

  useEffect(() => {
    const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.async = true;

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  window.initMap = async () => {
    try {
      const shelterData = await fetchMapPlaceData();

      const newMap = new window.google.maps.Map(ref.current, {
        center: { lat: 37.569227, lng: 126.9777256 },
        zoom: 16
      });

      /*       shelterData.forEach((shelter, index) => {
        const marker = new window.google.maps.Marker({
          position: { lat: shelter.lat, lng: shelter.lng },
          map: newMap,
          title: shelter.name,
          icon: {
            url: process.env.PUBLIC_URL + "/images/marker.png",
            scaledSize: new window.google.maps.Size(40, 50),
            origin: new window.google.maps.Point(0, 0),
            anchor: new window.google.maps.Point(25, 50),
          },
        });
      }); */

      if (newMap instanceof window.google.maps.Map) {
        setMap(newMap);
      } else {
        console.error("Invalid map instance");
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={styles.container}>
      <nav className={styles.nav_title}>지진알리미</nav>
      <main className={styles.main_title}>
        지진알리미와 함께 서울시 대피소를 손쉽게 조회해보세요.
      </main>
      <Link to="/home" className={styles.main_button}>
        바로가기&nbsp;&nbsp;&nbsp;&nbsp;&gt;
      </Link>
      <Link to="/team" className={styles.about_button}>
        About
      </Link>
      <img src={markerImage} alt="marker" className={styles.marker} />
      <img src={markerImage} alt="marker" className={styles.marker} />
      <img src={markerImage} alt="marker" className={styles.marker} />
      <div ref={ref} className={styles.map} data-testid="google-map" />
    </div>
  );
};

export default AboutMain;
