import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="root">
      <div className="card">
        <div className="container">
          <span className="title">SITE</span>
          <span
            className="content"
            href="http://3.34.76.221:3000/home"
            alt="지진알리미-FE"
          >
            <a className="item">지진알리미-FE</a>
            <a
              className="item"
              href="https://earthquake-alert.site/"
              alt="지진알리미-FE&BE"
            >
              지진알리미-FE&BE
            </a>
          </span>
        </div>
        <div className="container">
          <span className="title">GITHUB</span>
          <span className="content">
            <a
              className="item"
              href="https://github.com/dgu-earthquake-alert/2023-1R-team-project.git"
              alt="지진알리미-FE, 랜딩페이지 깃허브"
            >
              지진알리미-FE, 랜딩페이지
            </a>
            <a
              className="item"
              href="https://github.com/dgu-earthquake-alert/earthquake-alert.git"
              alt="지진알리미-FE&BE"
            >
              지진알리미-FE&BE
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
