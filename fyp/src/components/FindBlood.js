import React from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import animationmap from "../animations/map.json";
import animationData from "../animations/data.json";

const FindBlood = () => {
  const navigate = useNavigate();

  const handledonordetail = () => {
    navigate("/donorsdetails");
  };
  const handlelocation = () => {
    navigate("/livelocation");
  };
  return (
    <>
      <div className="findblood-bg">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={handlelocation} className="findb-btn">
          <Lottie
            options={{
              animationData: animationmap,
              loop: true,
              autoplay: true,
            }}
            height={200}
            width={200}
          />
          <h3>By Live Location</h3>
          </button>
          <button onClick={handledonordetail} className="findb-btn">
          <Lottie
            options={{
              animationData: animationData,
              loop: true,
              autoplay: true,
            }}
            height={200}
            width={200}
          />          <h3>Donors Details</h3>

          </button>
        </div>
      </div>
    </>
  );
};
export default FindBlood;
