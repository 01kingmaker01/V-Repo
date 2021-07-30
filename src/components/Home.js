import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "./hero/BackgroundAsImageWithCenteredContent";
import { Container, ContentWithPaddingXl } from "./misc/Layouts";
import Footer from "./footers/FiveColumnWithInputForm";

import { SectionHeading } from "./misc/Headings";
import { PrimaryButton } from "./misc/Buttons";

import { getPost } from "../actions";
import Login from "./login/Login";
import { PostList } from "./postList";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Home = () => {
  const dispatch = useDispatch();

  const {
    userReducer,
    postsReducer: { previous, next, results: postsData },
  } = useSelector((state) => {
    return state;
  });

  useEffect(() => {
    return userReducer ? dispatch(getPost()) : null;
  }, [dispatch, userReducer]);

  console.log({ userReducer, postsData });
  return (
    <>
      {!userReducer || userReducer === "" ? (
        <Login />
      ) : (
        <AnimationRevealPage>
          <Hero />
          <Container>
            <ContentWithPaddingXl>
              <HeadingRow>
                <Heading>Recent Events</Heading>
              </HeadingRow>

              <PostList postsData={postsData} />

              <ButtonContainer>
                {previous && (
                  <LoadMoreButton
                    onClick={() => {
                      console.log("Clicked Previous");
                      return dispatch(getPost(previous));
                    }}
                  >
                    Previous
                  </LoadMoreButton>
                )}

                {next && (
                  <LoadMoreButton
                    onClick={() => {
                      console.log("Clicked Next");
                      return dispatch(getPost(next));
                    }}
                  >
                    Next
                  </LoadMoreButton>
                )}
              </ButtonContainer>
            </ContentWithPaddingXl>
          </Container>
          <Footer />
        </AnimationRevealPage>
      )}
      ;
    </>
  );
};
export default Home;
