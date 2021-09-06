/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { ReactComponent as RightIcon } from "images/rightArrow.svg";
import "styles/departments.css";
import { dep } from "Data";
import { StyledHeader } from "./Form";
import Footer from "./footers/footer";

export const Departments = () => {
  const [data] = useState(dep);
  return (
    <div id="bg">
      <StyledHeader />
      <section className="page-contain">
        {data.map((state) => {
          return (
            <Tilt className="data-card">
              <a href="#">
                <h3>{state.posts}</h3>
                <h4>{state.dep}</h4>
                <p>{state.summary}</p>
                <span className="link-text">
                  View Details
                  <RightIcon />
                </span>
              </a>
            </Tilt>
          );
        })}
      </section>
      <Footer />
    </div>
  );
};
