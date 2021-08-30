import React from "react";
import Error404 from "images/404.svg";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import { StyledHeader } from "./Form";

const Container = tw(
  ContainerBase
)`min-h-screen bg-purple-100  text-white font-medium -m-8`;

const Content = tw.div`  m-12 bg-white text-gray-900 shadow-lg p-6 sm:rounded-lg flex justify-center flex-1 `;

const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;

const MainContent = tw.div`text-center	 mt-12 flex flex-col items-center`;

const InnerContainer = tw.div`w-full flex-1 mt-8`;

const IllustrationContainer = tw.div`flex p-4 md:mt-10 md:mb-20 lg:p-0  justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const Home = tw.a`border-2 duration-700  ease-in-out transform  transition hocus:scale-110 p-2 mt-12 text-primary-500 rounded-lg border-primary-500`;

const NoMatch = () => {
  return (
    <AnimationRevealPage>
      <Container>
        <StyledHeader />
        <Content>
          <MainContent>
            <Heading>Page Requested Not Found</Heading>
            <InnerContainer>
              <IllustrationContainer>
                <img src={Error404} alt="svg" />
              </IllustrationContainer>
            </InnerContainer>
            <Home href="/">Go to Home</Home>
          </MainContent>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};

export default NoMatch;
