import React from "react";
import Check from "../assets/Subtract.svg";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="hero__left">
          <div className="hero__left-label bg-neutral-15 fs-14">
            <img src={Check} alt="" />
            <div>No LLC Required, No Credit Check.</div>
          </div>
          <div className="hero__left-title fs-38 fw-medium">
            Welcome to YourBank Empowering Your{" "}
            <span className="clr-primary-60"> Financial Journey</span>
          </div>
          <div className=" hero__left-desc fw-light fs-16">
            At YourBank, our mission is to provide comprehensive banking
            solutions that empower individuals and businesses to achieve their
            financial goals. We are committed to delivering personalized and
            innovative services that prioritize our customers needs.
          </div>
          <button className="hero__left-button clr-neutral-11 bg-primary-65 fs-16 fw-regular">
            Open Account
          </button>
        </div>
        <div className="hero__right">
          <div></div>
        </div>
      </section>
    </>
  );
};

export default Hero;
