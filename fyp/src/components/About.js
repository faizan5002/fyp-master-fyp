import React from "react";
import aboutp from "../images/aboutp.jpg";
import image2 from "../images/image2.png";
import image3 from "../images/image3.jpg";
import image4 from "../images/image4.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const About = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,          
    autoplaySpeed: 5000, 
  };

  return (
    <>
      <div className="abt-bg">
        <div className="abt-banner">
        <Slider {...settings}>
            <div>
              <img className="abt-img" src={aboutp} alt="" />
            </div>
            <div>
              <img className="abt-img" src={image2} alt="" />
            </div>
            <div>
              <img className="abt-img" src={image3} alt="" />
            </div>
            <div>
              <img className="abt-img" src={image4} alt="" />
            </div>
       
          </Slider>
        </div>
        <div className="about-content">
          <h1 className="abt-h">Who are We ?</h1>
          <p className="abt-p">
            Welcome to our blood donor website! We are a team of passionate
            individuals committed to making a difference in the lives of people
            in need.Our mission is to provide a platform that connects blood
            donors with those in need of blood transfusions. We believe that
            donating blood is a simple yet powerful act of kindness that can
            save lives and create a positive impact on the community.
          </p>
        </div>

        <div class="row">
          <div class="col-sm-5">
            <div class="card-abt">
              <div class="card-body">
                <h5 class="card-title">Our Services</h5>
                <p class="card-text">
                  We also collaborate with blood banks, hospitals, and other
                  healthcare organizations to raise awareness about the
                  importance of blood donation and educate the public about the
                  process and benefits of donating blood.
                </p>
                <a href="/signup" class="btn-joinus">Join us </a>
              </div>
            </div>
          </div>
          <div class="col-sm-5">
            <div class="card-abt">
              <div class="card-body">
                <h5 class="card-title">Our Mission</h5>
                <p class="card-text">
                  Our goal is to to increase awareness about the importance of
                  blood donation, to connect eligible blood donors with those in
                  need of blood transfusions, and to promote a safe and
                  efficient donation process
                </p>
                <a href="/signup" class="btn-joinus">Join us </a>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="tips">
          <h1 className="b-tips">Some Blood Tips</h1>
          <ul className="l-tips">
            <li>
              Drink plenty of water the night and morning before you donate.
            </li>
            <li>Eat breakfast to help keep your blood sugar up.</li>
            <li>
              Eat iron rich foods for 2 weeks before your appointment; for
              example, spinach, whole grains, eggs, and beef
            </li>
            <li>Avoid fatty foods for twenty-four hours before you donate</li>
            <li>
              Avoid smoking on the day before donating. You can smoke 3 hours
              after donation.
            </li>
            <li>Ask for a blanket if your hands or feet start to feel cold.</li>
            <li>
              Have a snack after the donation.Rest for a few minutes enjoying
              your snack before leaving the donation site
            </li>
            <li>
              You will not be eligible to donate blood if you have consumed
              alcohol 48 hours before donation.
            </li>
            <li>
              Avoid heavy lifting and strenuous exercise for the rest of the
              day.
            </li>
          </ul>

          <h1 className="b-facts">Some Blood Facts</h1>
          <ul className="l-facts">
            <li>
              Blood is the fluid that maintains life. It circulates through the
              body's heart, arteries, veins and capillaries.
            </li>
            <li>
              Blood carries to the body nourishment, electrolytes, hormones,
              vitamins, antibodies, heat, and oxygen. Needless to say, its quite
              essential to life !
            </li>
            <li>
              Did you know ? A woman has approximately 4.5 liters of blood in
              her body, while men have 5.6 liters.
            </li>
            <li>
              By donating just one pint of blood, four lives can be saved.
              Imagine that !
            </li>
            <li>
              Blood fights against infection and helps heal wounds, keeping you
              healthy.
            </li>
            <li>
              Fun Fact ! Your blood takes a very long trip through your body. If
              you could stretch out all of a human's blood vessels, they would
              be about 60,000 miles long. That's enough to go around the world
              twice.
            </li>
            <li>Blood makes up about 7% of your body's weight.</li>
            <li>
              A newborn baby has about one cup of blood in his or her body.
            </li>
            <li>
              White blood cells are the body's primary defence against
              infection.
            </li>
          </ul>
          <div class="container my-5">
            <footer style={{ backgroundColor: "#db2f2f" }}>
              <div class="container p-4">
                <div class="row">
                  <div class="col-lg-8 col-md-12 mb-4">
                    <h5 class="mb-3">Donate & save a Precious Life! </h5>
                    <p>
                      Thank you for considering becoming a blood donor and for
                      visiting our website. By donating blood, you can make a
                      significant impact on the health and well-being of our
                      community. Contact us today to schedule your blood
                      donation appointment.
                    </p>
                  </div>
                  <div class="col-lg-3 col-md-6 mb-4">
                    <ul class="list-unstyled">
                      <li class="ft-l">
                        <a href="/" style={{ color: "white",textDecoration:"none" }}>
                          Home
                        </a>
                      </li>
                    
                      <li class="ft-l">
                        <a href="calculator" style={{ color: "white",textDecoration:"none"}}>
                          Check Eligibility
                        </a>
                      </li>
                      <li class="ft-l">
                        <a href="signup" style={{ color: "white" ,textDecoration:"none"}}>
                          Register Now
                        </a>
                      </li>
                      <li class="ft-l">
                        <a href="/findblood" style={{ color: "white" ,textDecoration:"none"}}>
                          Find Donor
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
