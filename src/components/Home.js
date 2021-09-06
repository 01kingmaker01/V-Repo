import React, { lazy, useEffect, Suspense, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import tw from "twin.macro";

import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";

import AnimationRevealPage from "../helpers/AnimationRevealPage";
import Hero from "./hero/BackgroundAsImageWithCenteredContent";
import { Container, ContentWithPaddingXl } from "./misc/Layouts";
import Footer from "./footers/footer";
import whiteLogo from "../images/vrepo_.svg";

import { SectionHeading } from "./misc/Headings";
import { PrimaryButton } from "./misc/Buttons";

import { getPost } from "../actions";
import { PostList } from "./postList";
import { useLocation } from "react-router";

const ModalCon = lazy(() => import("./Modal"));

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Home = () => {
  const location = useLocation();
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

  const [modalIsOpen, setModalIsOpen] = useState(true);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    <>
      <AnimationRevealPage>
        <Hero logoSvg={whiteLogo} />
        {location?.state?.msg ? (
          <>
            <Suspense fallback={<div>Loading...</div>}>
              <ModalCon
                modalIsOpen={modalIsOpen}
                msg={location?.state?.msg}
                toggleModal={toggleModal}
              />
            </Suspense>
          </>
        ) : null}
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
        <Footer margin={"-mx-8"} />
      </AnimationRevealPage>
    </>
  );
};

export default Home;
