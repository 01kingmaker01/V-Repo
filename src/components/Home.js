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
import { Form } from "./Form";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const Home = () => {
  const dispatch = useDispatch();

  const {
    postsReducer: { previous, next, results: postsData },
  } = useSelector((state) => {
    return state;
  });
  console.log({ previous, next, posts: postsData });
  var user = "Ketan";

  useEffect(() => {
    return dispatch(getPost());
  }, [dispatch]);

  return !user ? (
    <Login />
  ) : (
    // <Form />
    <AnimationRevealPage>
      <Hero />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>Recent Events</Heading>
          </HeadingRow>
          <Posts>
            {postsData &&
              postsData.map((post, index) => {
                console.log({ post, index });
                return (
                  <PostContainer
                    key={index}
                    featured={index === 0 ? true : false}
                  >
                    <Post className="group" as="a">
                      <Image imageSrc={post.add_image} />
                      <Info>
                        <Category>{post.committee}</Category>
                        <CreationDate>
                          {post.created_at.toString()}
                        </CreationDate>
                        {/*  repalce author with date*/}
                        <Title>{post.title}</Title>
                        {post.description && (
                          <Description>{post.description}</Description>
                        )}
                      </Info>
                    </Post>
                  </PostContainer>
                );
              })}
          </Posts>

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
  );
};

export default Home;
