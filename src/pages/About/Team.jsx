import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import soyeonImg from "../../assets/icon/soyeon.PNG";
import hankyulImg from "../../assets/icon/hankyul.PNG";
import subinImg from "../../assets/icon/subin.PNG";
import byulImg from "../../assets/icon/byul.png";

const html5 =
  "https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white";
const css =
  "https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white";
const js =
  "https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black";
const react =
  "https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black";
const java =
  "https://img.shields.io/badge/Java-007396.svg?&style=for-the-badge&logo=Java&logoColor=white";
const springboot =
  "https://img.shields.io/badge/springboot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white";
const mysql =
  "https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white";
const ubuntu =
  "https://img.shields.io/badge/ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white";
const ec2 =
  "https://img.shields.io/badge/amazon ec2-FF9900?style=for-the-badge&logo=amazon ec2&logoColor=white";
const docker =
  "https://img.shields.io/badge/docker-2496ED?style=for-the-badge&logo=docker&logoColor=white";
const firebase =
  "https://img.shields.io/badge/firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white";
const figma =
  "https://img.shields.io/badge/Figma-F24E1E.svg?&style=for-the-badge&logo=Figma&logoColor=white";

const data = [
  {
    name: "공소연",
    studentId: "2020110210",
    dept: "경제학과",
    skills: [html5, css, js, react, figma],
    role: "랜딩페이지 / 사이드바(현재위치 보기, 위치 기반 가까운 대피소 보기, 위치 저장 기능 등) \n지도에 현재위치 마커출력 / 전체적인 디자인 및 퍼블리싱",
    github: "https://github.com/Kong-E",
    img: soyeonImg
  },
  {
    name: "민한결",
    studentId: "2017112288",
    dept: "건설환경공학과",
    skills: [
      html5,
      css,
      js,
      react,
      java,
      springboot,
      mysql,
      ubuntu,
      ec2,
      docker
    ],
    role: "프론트 백 연동 / 소셜로그인 모달 / 랜딩페이지(네비게이션, 링크페이지) / FE프로젝트 배포 \n\nOAuth2 개발 / 즐겨찾기 저장 api 개발",
    github: "https://github.com/roberniro",
    img: hankyulImg
  },
  {
    name: "이수빈",
    studentId: "2018112132",
    dept: "정보통신공학과",
    skills: [
      html5,
      css,
      js,
      react,
      java,
      springboot,
      mysql,
      ubuntu,
      ec2,
      docker,
      firebase
    ],
    role: "팀장 / 지진 대피소 조회 페이지/ 지진 이력 조회 페이지 / FE&BE프로젝트 배포 \n\n백엔드 연동 test modal / Google Map Info / 지진 경보 백그라운드 푸시 알림 기능",
    github: "https://github.com/bin-pro",
    img: subinImg
  },
  {
    name: "한별",
    studentId: "2017112191",
    dept: "정보통신공학과",
    skills: [html5, css, js, react],
    role: "팀 소개 페이지 / 행동수칙 페이지 / 에러 페이지 \n지도에 대피소 마커출력 / test modal",
    github: "https://github.com/starht",
    img: byulImg
  }
];

const Team = () => {
  return (
    <>
      <Navbar />
      <div>
        {data.map((item, index) => (
          <Card key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Team;
