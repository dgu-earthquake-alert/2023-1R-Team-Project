import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./error.module.css";
import errorIcon from "../../assets/icon/error.png";

const Error = () => {
  return (
    <>
      <div className={styles.img_wrraper}>
        <img src={errorIcon} alt="error" width="500px" />
      </div>
      <div>
        <p className={styles.error_text}>잘못된 주소입니다.</p>
        <p className={styles.error_text}>다시 한번 확인해 주세요!</p>
        <Link to="/home" className={styles.select_button}>
          홈으로 돌아가기
        </Link>
      </div>
    </>
  );
};

export default Error;
