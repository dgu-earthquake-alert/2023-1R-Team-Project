import styles from "../../../../styles/home/sidebar.module.css";
import remove from "../../../../assets/icon/remove-filled.svg";

const SaveLocationSection = ({
  isMobile,
  isRemoveToggle,
  toggleSidebar,
  nearbyShelterRef,
  bookmarks,
  removeBookmark,
  updateMapCenter,
}) => {
  let topValue =
    70 +
    50 *
      (nearbyShelterRef.current?.length === 0
        ? 1
        : nearbyShelterRef.current?.length);

  return (
    <>
      {bookmarks?.length > 0 &&
        bookmarks.map((bookmark, index) => {
          let additionalOffset = 0;

          if (index > 0) {
            for (let i = index - 1; i >= 0; i--) {
              additionalOffset +=
                50 *
                (bookmarks[i]?.shelter?.length === 0
                  ? 1
                  : bookmarks[i]?.shelter?.length);
            }
          }

          return (
            <div key={`${bookmark.name}_${bookmark.location.lat}`}>
              <div
                className={styles.my_location}
                style={{
                  top: `${topValue + 70 * index + additionalOffset}px`,
                }}
                onClick={() => {
                  updateMapCenter(bookmark.location.lat, bookmark.location.lng);
                  isMobile && toggleSidebar();
                }}
              >
                <div className={styles.my_location_title}>
                  {bookmark.name}
                  {isRemoveToggle && (
                    <img
                      src={remove}
                      alt="remove"
                      width="20px"
                      height="20px"
                      className={styles.bookmark_remove_item}
                      onClick={(e) => {
                        e.stopPropagation();
                        removeBookmark(index);
                      }}
                    />
                  )}
                </div>
                <div className={styles.my_location_name}>
                  {bookmark.location?.address}
                </div>
              </div>
              {bookmark.shelter.length > 0 ? (
                bookmark.shelter.map((item, idx) => (
                  <div
                    className={`${styles.my_location_item} ${styles.displayed}`}
                    style={{
                      top: `${
                        topValue + 70 * index + additionalOffset + 70 + 50 * idx
                      }px`,
                    }}
                    key={`${item.name}_${idx}`}
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
                  style={{
                    top: `${topValue + 70 * index + additionalOffset + 70}px`,
                    cursor: "default",
                  }}
                >
                  주변 대피소 조회 불가
                </div>
              )}
            </div>
          );
        })}
    </>
  );
};

export default SaveLocationSection;
