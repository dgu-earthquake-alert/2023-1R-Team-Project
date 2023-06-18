import styles from "../../../../styles/home/sidebar.module.css";

const CurrentLocationSection = ({
  isMobile,
  toggleSidebar,
  updateMapCenter,
  lat,
  lng,
  location,
  nearbyShelterRef,
}) => {
  return (
    <>
      <div
        className={styles.my_location}
        onClick={() => {
          updateMapCenter(lat, lng);
          isMobile && toggleSidebar();
        }}
      >
        <div className={styles.my_location_title}>현재 위치</div>
        <div className={styles.my_location_name}>{location}</div>
      </div>
      {nearbyShelterRef.current?.length !== 0 ? (
        nearbyShelterRef.current.map((item, idx) => (
          <div
            className={`${styles.my_location_item} ${styles.displayed}`}
            style={{ top: `${70 + 50 * idx}px` }}
            onClick={() => {
              updateMapCenter(item.lat, item.lng);
              isMobile && toggleSidebar();
            }}
          >
            {item.name}
          </div>
        ))
      ) : (
        <div
          className={`${styles.my_location_item} ${styles.displayed}`}
          style={{ top: "70px", cursor: "default" }}
        >
          주변 대피소 조회 불가
        </div>
      )}
    </>
  );
};

export default CurrentLocationSection;
