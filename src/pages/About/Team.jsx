import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import soyeonImg from "../../assets/icon/soyeon.PNG";
import hankyulImg from "../../assets/icon/hankyul.PNG";
import subinImg from "../../assets/icon/subin.PNG";
import byulImg from "../../assets/icon/byul.jpg";

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

const data = [
  {
    name: "공소연",
    studentId: "2020110210",
    dept: "경제학과",
    skills: [html5, css, js, react],
    role: "Developer",
    github: "https://github.com/Kong-E",
    img: soyeonImg,
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
      docker,
    ],
    role: "Developer",
    github: "https://github.com/roberniro",
    img: hankyulImg,
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
      firebase,
    ],
    role: "Developer",
    github: "https://github.com/bin-pro",
    img: subinImg,
  },
  {
    name: "한별",
    studentId: "2017112191",
    dept: "정보통신공학과",
    skills: [html5, css, js, react],
    role: "Developer",
    github: "https://github.com/starht",
    img: byulImg,
  },
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
