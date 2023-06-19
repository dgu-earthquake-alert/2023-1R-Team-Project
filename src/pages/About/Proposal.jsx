import React from "react";
import Navbar from "./components/Navbar";
import "../../styles/about/Proposal.css";

const Proposal = () => {
  const imageAmount = 19; // 실제 이미지의 개수로 이 값을 변경하십시오.
  const images = Array.from(
    { length: imageAmount },
    (v, i) => `images/ppt/${i + 1}.png`
  );

  return (
    <>
      <Navbar />
      <div className="proposal-pictures-container pb-5">
        {images.map((image, index) => (
          <div className="proposal-picture-wrapper">
            <img
              className="resized-image"
              key={index}
              src={process.env.PUBLIC_URL + "/" + image}
              alt={`PPT Image ${index}`}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Proposal;
