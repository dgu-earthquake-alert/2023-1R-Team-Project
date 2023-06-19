import styles from "./styles/sidebar.module.css";

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  bookmarkName,
  setBookmarkName,
  handleBookmarkSave,
  clickedLocation,
}) => {
  return (
    <>
      {isModalOpen && (
        <div className={styles.modal_content}>
          <input
            type="text"
            className={styles.modal_input}
            value={bookmarkName}
            onChange={(e) => setBookmarkName(e.target.value)}
            placeholder="저장할 이름을 입력하세요."
          />
          <input
            type="text"
            className={styles.modal_input}
            value={clickedLocation?.address}
            placeholder="저장할 위치를 클릭하세요."
            title="저장할 위치를 지도에서 클릭하세요."
          />
          <div className={styles.modal_button_container}>
            <button
              className={styles.modal_button}
              onClick={handleBookmarkSave}
            >
              저장
            </button>
            <button
              className={styles.modal_button}
              onClick={() => setIsModalOpen(false)}
            >
              취소
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
