import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import logo from "images/logo_vit.png";
import ms from "images/ms.svg";
import DesignIllustration from "images/design-illustration.svg";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-40 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`  lg:w-1/2 xl:w-5/12 p-6 sm:p-10`;
const LogoLink = tw.div`flex p-4 rounded bg-primary-500   items-center justify-center md:justify-start`;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const IllustrationContainer = tw.div`flex p-4 mb-10   md:mt-10 md:mb-20 lg:p-0  justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.button`
  ${tw`w-full max-w-xs font-semibold shadow rounded-lg  border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}

  .icon {
    ${tw`w-20`}
  }
`;

export default () => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <LogoLink>
            <LogoImage src={logo} />
          </LogoLink>
          <MainContent>
            <Heading>Sign In for V-Repo</Heading>
            <FormContainer>
              <IllustrationContainer>
                <img src={DesignIllustration} alt="svg" />
              </IllustrationContainer>
              <SocialButtonsContainer>
                <SocialButton>
                  <span className="iconContainer">
                    <img src={ms} className="icon" alt="" />
                  </span>
                </SocialButton>
              </SocialButtonsContainer>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                SignIn with Email provided by Vidyalankar Instiute of
                Technology, Wadala.
              </p>
              <p tw="mt-6 text-xs text-gray-600 text-center">
                <b>Ex.</b>name.surname@vit.edu.in
              </p>
            </FormContainer>
          </MainContent>
        </MainContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
