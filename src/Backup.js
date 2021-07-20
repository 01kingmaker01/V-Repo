import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";

import AnimationRevealPage from "./helpers/AnimationRevealPage";
import Hero from "./components/hero/BackgroundAsImageWithCenteredContent";
import { Container, ContentWithPaddingXl } from "./components/misc/Layouts";
import Footer from "./components/footers/FiveColumnWithInputForm";

import { SectionHeading } from "./components/misc/Headings";
import { PrimaryButton } from "./components/misc/Buttons";

import { getPost } from "./actions";
import Login from "components/login/Login";
import { Form } from "components/Form";

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

const App = () => {
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
    <Form />
  ) : (
    // <Login />
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
                        <CreationDate>{post.author}</CreationDate>
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
            {previous ? (
              <LoadMoreButton
                onClick={() => {
                  console.log("Clicked Previous");
                  return dispatch(getPost(previous));
                }}
              >
                Previous
              </LoadMoreButton>
            ) : null}

            {next ? (
              <LoadMoreButton
                onClick={() => {
                  console.log("Clicked Next");
                  return dispatch(getPost(next));
                }}
              >
                Next
              </LoadMoreButton>
            ) : null}
          </ButtonContainer>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </AnimationRevealPage>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
  category: "Faculty",
  date: "April 19, 2020",
  title: "Visit the beautiful Alps in Switzerland",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});

const posts = [
  {
    imageSrc:
      "https://images.unsplash.com/photo-1499678329028-101435549a4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
    category: " ITSA",
    date: "April 21, 2020",
    title: "👑ISTE-VIT 2021-2022 INTERVIEWS 👑 ",
    description: `

      In these unexpected and challenging times, it's your time to shine⚡
      
      Here's a great opportunity for you to come to join THE INDIAN SOCIETY FOR TECHNICAL EDUCATION - VIT! With the portrayal of leadership, integrity, empathy, and courage, take on this venture to become the 
      leaders of tomorrow!✨💪🏻
      
      In these unexpected and challenging times, it's your time to shine⚡
      Here's a great opportunity for you to come to join THE INDIAN SOCIETY FOR TECHNICAL EDUCATION - VIT! With the portrayal of leadership, integrity, empathy, and courage, take on this venture to become the 
      leaders of tomorrow!✨💪🏻

      In these unexpected and challenging times, it's your time to shine⚡
      Here's a great opportunity for you to come to join THE INDIAN SOCIETY FOR TECHNICAL EDUCATION - VIT! With the portrayal of leadership, integrity, empathy, and courage, take on this venture to become the 
      leaders of tomorrow!✨💪🏻

      In these unexpected and challenging times, it's your time to shine⚡
      Here's a great opportunity for you to come to join THE INDIAN SOCIETY FOR TECHNICAL EDUCATION - VIT! With the portrayal of leadership, integrity, empathy, and courage, take on this venture to become the 
      leaders of tomorrow!✨💪🏻
      
      In these unexpected and challenging times, it's your time to shine⚡
      Here's a great opportunity for you to come to join THE INDIAN SOCIETY FOR TECHNICAL EDUCATION - VIT! With the portrayal of leadership, integrity, empathy, and courage, take on this venture to become the 
      leaders of tomorrow!✨💪🏻
      
      `,
    url: "https://timerse.com",
    featured: true,
  },
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
  getPlaceholderPost(),
];

export default App;
