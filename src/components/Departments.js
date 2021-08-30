import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { ReactComponent as RightIcon } from "images/rightArrow.svg";
import "styles/departments.css";
import { dep } from "Data";
import styled from "styled-components";
import tw from "twin.macro";
import { Container as ContainerBase } from "components/misc/Layouts";

import Header, {
  NavLinkCon,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "components/headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 text-black px-10 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLinkCon}, ${LogoLink} {
    ${tw`text-black hover:border-primary-500 hover:text-primary-500`}
  }
  ${NavToggle}.closed {
    ${tw`text-black hover:text-primary-500`}
  }
`;

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
    </div>
  );
};
