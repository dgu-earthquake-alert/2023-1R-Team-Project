import React from "react";
import "../../../styles/about/card.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = ({ data }) => {
  const roleLines = data.role.split("\n");

  return (
    <div>
      <div className="card mb-3 card_box">
        <div className="row g-0">
          <div className="col-md-4 img_wrapper">
            <img src={data.img} className="img-fluid img rounded-circle" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h3 className="card-title">{data.name}</h3>
              <p className="card-text">Student ID: {data.studentId}</p>
              <p className="card-text">Department: {data.dept}</p>
              <p className="card-text">Skills: </p>
              {data.skills.map((skill, index) => (
                <img key={index} src={skill} alt="Skill" />
              ))}
              <p className="card-text">
  Role: <br />
  {roleLines.map((line, index) => (
    <span key={index}>
      {index === 2 ? (
        <span className="backend_text">{line}</span>
      ) : (
        <>{line}</>
      )}
      <br />
    </span>
  ))}
</p>
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn git_btn"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
