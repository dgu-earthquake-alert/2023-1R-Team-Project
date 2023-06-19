import { useEffect, useState, useRef } from "react";
import styles from "./styles/sidebar.module.css";
import { fetchMapPlaceData } from "../../../../utils/api";
import { useMediaQuery } from "react-responsive";
import Modal from "./Modal";
import CurrentLocationSection from "./CurrentLocationSection";
import SaveLocationSection from "./SaveLocationSection";

const Sidebar = ({
  isSidebarOpen,
  toggleSidebar,
  lat,
  lng,
  map,
  location,
  getMyLocation,
  clickedLocation,
  updateMapCenter,
}) => {
  const [isRotated, setIsRotated] = useState(false); // 새로고침버튼 회전 여부
  const [isModalOpen, setIsModalOpen] = useState(false); // 북마크 모달창 여부
  const [bookmarkName, setBookmarkName] = useState(""); // 북마크 이름
  const [bookmarks, setBookmarks] = useState(
    JSON.parse(localStorage.getItem("bookmarks")) ?? []
  ); // Store bookmarks
  const nearbyShelterRef = useRef([]); // 주변 대피소 정보
  const [isRemoveToggle, setIsRemoveToggle] = useState(false); // 북마크 삭제버튼 클릭 여부
  const [showToast, setShowToast] = useState(false); // 토스트 표시 여부

  const isMobile = useMediaQuery({
    query: "(max-width:819px)",
  });

  const removeBookmark = (index) => {
    setBookmarks((prev) => {
      const updatedBookmarks = [...prev];
      updatedBookmarks.splice(index, 1);
      return updatedBookmarks;
    });
  };

  const refresh = () => {
    setIsRotated(true);
    getMyLocation();
    setTimeout(() => {
      setIsRotated(false);
    }, 500);
  };

  // 저장한 위치의 1km 반경 이내 대피소 3개
  const handleBookmarkSave = async () => {
    if (bookmarkName !== "") {
      if (bookmarks.length >= 5) {
        setShowToast((prev) => !prev); // Display toast when the number of bookmarks exceeds 5
        return;
      }

      const filteredShelter = await fetchMapPlaceData().then((data) =>
        data.filter(
          (item) =>
            item.lat > clickedLocation.lat - 0.01 &&
            item.lat < clickedLocation.lat + 0.01 &&
            item.lng > clickedLocation.lng - 0.01 &&
            item.lng < clickedLocation.lng + 0.01
        )
      );

      // 가까운 순으로 정렬
      const sortedFilteredShelter = filteredShelter.sort((a, b) => {
        const aDistance = Math.sqrt(
          Math.pow(a.lat - clickedLocation.lat, 2) +
            Math.pow(a.lng - clickedLocation.lng, 2)
        );
        const bDistance = Math.sqrt(
          Math.pow(b.lat - clickedLocation.lat, 2) +
            Math.pow(b.lng - clickedLocation.lng, 2)
        );
        return aDistance - bDistance;
      });

      const newBookmark = {
        name: bookmarkName,
        location: clickedLocation,
        shelter: sortedFilteredShelter.slice(0, 3),
      };

      setBookmarks((prev) => [...prev, newBookmark]);
      setIsModalOpen(false);
      setBookmarkName("");
    }
  };

  // 현재위치의 1km 이내 대피소 3개
  useEffect(() => {
    const findNearestShelter = () => {
      fetchMapPlaceData().then((data) => {
        if (
          location !== "위치정보없음" ||
          location.indexOf("서울특별시") !== -1
        ) {
          const filteredShelter = data.filter((item) => {
            return (
              item.lat > lat - 0.01 &&
              item.lat < lat + 0.01 &&
              item.lng > lng - 0.01 &&
              item.lng < lng + 0.01
            );
          });

          const sortedFilteredShelter = filteredShelter.sort((a, b) => {
            const aDistance = Math.sqrt(
              Math.pow(a.lat - lat, 2) + Math.pow(a.lng - lng, 2)
            );
            const bDistance = Math.sqrt(
              Math.pow(b.lat - lat, 2) + Math.pow(b.lng - lng, 2)
            );
            return aDistance - bDistance;
          });

          nearbyShelterRef.current = sortedFilteredShelter.slice(0, 3);

          /* console.log(nearbyShelterRef.current);
          console.log(lat, lng, location); */
        }
      });
    };

    findNearestShelter();
  }, [location, lat, lng]);

  useEffect(() => {
    localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  return (
    <>
      {/* 사이드바 오픈 */}
      <button
        className={`${styles.bookmark_button} ${
          isSidebarOpen ? styles.open : ""
        }`}
        onClick={() => {
          toggleSidebar();
          setIsRemoveToggle(false);
          setIsModalOpen(false);
        }}
      >
        ⭐
      </button>

      {/* 북마크 모달 */}
      <Modal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        handleBookmarkSave={handleBookmarkSave}
        bookmarkName={bookmarkName}
        setBookmarkName={setBookmarkName}
        clickedLocation={clickedLocation}
      />

      {/* Toast */}
      {showToast && (
        <div className={styles.toast}>최대 5개까지 저장할 수 있습니다.</div>
      )}

      {/* 사이드바 */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ""}`}>
        <div
          className={`${styles.bookmark_refresh} ${
            isRotated ? styles.rotate : ""
          }`}
          onClick={() => refresh()}
        ></div>
        <div
          className={styles.bookmark_add}
          onClick={() => setIsModalOpen((prev) => !prev)}
        ></div>
        <div
          className={styles.bookmark_remove}
          onClick={() => setIsRemoveToggle((prev) => !prev)}
        ></div>
        <div className={styles.my_location_container}>
          <CurrentLocationSection
            isMobile={isMobile}
            toggleSidebar={toggleSidebar}
            updateMapCenter={updateMapCenter}
            lat={lat}
            lng={lng}
            location={location}
            nearbyShelterRef={nearbyShelterRef}
          />
          <SaveLocationSection
            isMobile={isMobile}
            isRemoveToggle={isRemoveToggle}
            toggleSidebar={toggleSidebar}
            nearbyShelterRef={nearbyShelterRef}
            bookmarks={bookmarks}
            removeBookmark={removeBookmark}
            updateMapCenter={updateMapCenter}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
