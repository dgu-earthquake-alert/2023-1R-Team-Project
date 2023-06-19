import styles from "../styles/home.module.css";
import Draggable from "react-draggable"; // The default

const Memo = ({ shelter, shelterMemo, updateMemo, closeMemo, removeMemo }) => {
  return (
    <Draggable key={shelter.id}>
      <div className={styles.sticky_note}>
        <textarea
          className={styles.sticky_note_textarea}
          value={shelter.description}
          onChange={(e) => {
            const updatedShelterMemo = shelterMemo.map((s) => {
              if (s.id === shelter.id) {
                return { ...s, description: e.target.value };
              }
              return s;
            });
            updateMemo(updatedShelterMemo);
          }}
          maxLength={100}
        />
        <div className={styles.sticky_note_button_container}>
          <span
            onClick={() => closeMemo(shelter.id)}
            className={styles.sticky_note_close}
          >
            닫기
          </span>
          <span
            onClick={() => removeMemo(shelter.id)}
            className={styles.sticky_note_remove}
          >
            삭제
          </span>
        </div>
      </div>
    </Draggable>
  );
};

export default Memo;
