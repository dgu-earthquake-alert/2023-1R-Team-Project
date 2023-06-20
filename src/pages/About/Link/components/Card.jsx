import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = () => {
  return (
    <div className="card">
      <div className="container">
        <span className="title">SITE</span>
        <span className="content">
          <Link className="item" to="/home">
            지진알리미-FE
          </Link>
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
      <div className="card_footer">
        공모전 제출용 FE&BE 리포지토리에 이어서 FE 리포지토리에 작업하였습니다.
        <br />
        <br /> FE 프로젝트 배포 완료했으나 위치정보 API 요청을 위해 SSL 인증을
        사용하여 HTTP요청만 받는 서울시 API가 응답을 반환하지 않아 기능 동작은
        local환경 및 SPRING 프록시 서버를 활용한 FE&BE 프로젝트에서 확인
        가능합니다.
      </div>
    </div>
  );
};

export default Card;
