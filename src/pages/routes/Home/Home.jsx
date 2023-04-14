import React from "react";
import "./styles.scss";
import { AiOutlineArrowRight } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-text">
          <h1>
            <strong>Experience</strong> the best in <strong>Parts</strong>
          </h1>
          <p>
            Finding quality automotive parts shouldn't break the bank or leave
            you with a headache. From brakes to filters, we have everything you
            need to keep your vehicle running smoothly and looking great. Trust
            us to provide the clarity and affordability you deserve.
          </p>
          <button className="button shop">
            Shop Now <AiOutlineArrowRight size={"15px"} color="#f3f3f3" />{" "}
          </button>
        </div>
        <div className="hero-image">
          <div>
            <img src="/assets/img/carher.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
