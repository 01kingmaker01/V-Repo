/* eslint-disable array-callback-return */
import React from "react";
import tw from "twin.macro";
import styled, { keyframes } from "styled-components";
import { css } from "styled-components/macro";
import { SectionDescription } from "components/misc/Layouts.js";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { StyledHeader } from "./Form";
import Footer from "./footers/footer";

import { cards } from "Data";

const Container = styled.div`
  background-color: #f1e6fc;
`;
const HeadingContainer = tw.div`p-8`;
const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`mx-auto text-center`;

const Cards = tw.div`flex flex-wrap flex-row justify-center  mx-auto`;
const Card = styled.div`
  ${tw`m-8 shadow-lg rounded-md  bg-white justify-evenly flex flex-col items-center`} box-shadow: 0 1.5em 2.5em -0.5em rgba(0, 0, 0, 0.1);
`;
const CardImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`w-64 h-64 bg-contain bg-no-repeat bg-center rounded`}
`;
const CardContent = styled.div`
  ${tw`flex flex-col items-center mt-6`}
  .position {
    ${tw`uppercase font-bold tracking-widest text-xs text-primary-500`}
  }
  .name {
    ${tw`mt-1 text-xl font-medium text-gray-900`}
  9
`;

const CardLinks = styled.div`
  ${tw`my-6 flex`}
  .link {
    ${tw`mr-8 last:mr-0 text-gray-400 hocus:text-primary-500 transition duration-300`}
    .icon {
      ${tw` w-6 h-6`}
    }
  }
`;

const blink = keyframes`
0% {
${tw`text-gray-400 transform scale-100`}
}
50%{
  ${tw`text-primary-200 transform scale-105`}
}
100% {
  ${tw`text-primary-500 transform scale-110`}
}`;

const AboutUs = ({
  heading = "Meet These Fine Folks.",
  subheading = "INFT Faculty",
  description = "Better than a thousand days of diligent study is one day with a great teacher.",
}) => {
  return (
    <>
      <Container>
        <StyledHeader />
        <HeadingContainer>
          {subheading && <Subheading>{subheading}</Subheading>}
          {heading && <Heading>{heading}</Heading>}
          {description && <Description>{description}</Description>}
        </HeadingContainer>
        <Cards>
          {cards.map((card, index) => (
            <Card key={index}>
              <CardImage imageSrc={card.imageSrc} />
              <CardContent>
                <span className="position">{card.position}</span>
                <span className="name">{card.name}</span>
                <CardLinks>
                  {card.links.map((link, linkIndex) => {
                    if (link?.icon && link?.url) {
                      return (
                        <a
                          css={[
                            link?.blink &&
                              css`
                                animation: ${blink} 1s
                                  cubic-bezier(0, 0, 0.2, 1) infinite;
                              `,
                          ]}
                          key={linkIndex}
                          className="link"
                          rel="noopener noreferrer"
                          target="_blank"
                          href={link.url}
                        >
                          {link.icon && <link.icon className="icon" />}
                        </a>
                      );
                    }
                  })}
                </CardLinks>
              </CardContent>
            </Card>
          ))}
        </Cards>
        <Footer />
      </Container>
    </>
  );
};
export default AboutUs;
