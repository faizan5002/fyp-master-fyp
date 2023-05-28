import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lottie from "react-lottie";
import pAnimation from "../animations/prof.json";
import axios from "axios";
import Alert from "react-bootstrap/Alert";

const UserProfile = ({ name, email, phone }) => {
  const capitalizedFirstName = name.charAt(0).toUpperCase() + name.slice(1);
  const userId = localStorage.getItem("_id");
  const navigate = useNavigate();
  const [showalert, setshowalert] = useState(false);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
  const handledonor = () => {
    navigate("/registerdonor");
  };
  const handleexpr = () => {
    navigate("/userexperience");
  };
  const handleprf = () => {
    navigate("/postrequestform");
  };

  const handlehb = () => {
    navigate("/healthblog");
  };
  const handlefindb = () => {
    navigate("/findblood");
  };
  const handlevposts = () => {
    navigate("/viewposts");
  };
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "false" || isLoggedIn === null) {
    }
    const checker = async () => {
      const res = await axios.put(
        `https://blood-bank-backend-iaqf.onrender.com/api/v1/elegibility/checker/${userId}`
      );
      setshowalert(res.data.donor.eligibility);
    };
    checker();
  }, [navigate, userId]);

  return (
    <>
      {showalert ? (
        <Alert variant="success" className="alert-custom">
          Congratulations! You are eligible to donate blood today. Our records
          show that 90 days have passed since your last donation, which means
          you can help save lives by donating again. Thank you for your
          generosity and commitment to helping others in need.
        </Alert>
      ) : <Alert variant="success" className="alert-custom">
    We appreciate your interest in donating blood; however, we regret to inform you that you are currently ineligible to donate. Your health and well-being are of utmost importance to us, and there may be certain factors preventing you from donating at this time
    </Alert>}

      <div className="up-bg">
        <div className="prf-box">
          <Lottie
            options={{
              animationData: pAnimation,
              loop: true,
              autoplay: true,
            }}
            height={140}
            width={140}
          />
          <h3 className="u-name">
            <span>{capitalizedFirstName}</span>
          </h3>

          <h4 className="u-email">Email: {email}</h4>
          <h4 className="u-ph">Phone: {phone}</h4>
          <div className="usr-btns">
            <button onClick={handleLogout}>Logout</button>
            <button onClick={handledonor}>Register as Donor</button>
            <button onClick={handlefindb}>Find Blood</button>
            <button onClick={handleprf}>Blood Request</button>
            <button onClick={handlevposts}>Posts</button>
            <button onClick={handlehb}>Health Blogs</button>
            <button onClick={handleexpr}>User Experience</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
