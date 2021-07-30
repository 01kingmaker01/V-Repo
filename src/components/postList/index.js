import React from "react";
import "tailwindcss/dist/base.css";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import { Post } from "./post";

const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;

export const PostList = ({ postsData }) => {
  return (
    <Posts>
      {postsData &&
        postsData.map((post, index) => {
          return <Post key={post.id} index={index} post={post} />;
        })}
    </Posts>
  );
};
