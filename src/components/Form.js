import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { ReactComponent as SvgDotPatternIcon } from "../images/dot-pattern.svg";
import "../styles/input.css";
import { makePost } from "../actions";

import Header, {
  NavLink,
  NavLinks,
  PrimaryLink as PrimaryLinkBase,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "./headers/light.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 text-black px-10 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-black hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-black hover:text-primary-500`}
  }
`;

const Container = tw.div`relative `;
const Content = tw.div`max-w-screen-xl mx-auto py-20  px-10 lg:py-24`;

const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-primary-500 text-gray-100 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide border-b-2 py-2 text-gray-100 hocus:border-pink-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-5/12 flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-6`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;

const Input = tw.input``;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;

const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-gray-100 text-primary-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:shadow-outline hover:bg-gray-300 hover:text-primary-700 hocus:-translate-y-px hocus:shadow-xl`;

export const Form = () => {
  const [form, setForm] = useState({
    title: "",
    committee: "",
    description: "",
    images: [],
    file: [],
  });

  console.log(form);

  const dispatch = useDispatch();

  const clear = () => {
    setForm({
      title: "",
      committee: "",
      description: "",
      images: [],
      file: [],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(makePost(form));
    clear();
  };

  return (
    <Container>
      <StyledHeader />
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Add an Event</h2>
            <form action="#">
              <TwoColumn>
                <Column>
                  <InputContainer>
                    <Label htmlFor="Title">Title</Label>
                    <Input
                      value={form.title}
                      onChange={(e) => ({ ...form, title: e.target.value })}
                      id="Title"
                      type="text"
                      name="Title"
                      placeholder="E.g. Title Goes Here..."
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label htmlFor="Committee">Committee</Label>
                    <Input
                      value={form.committee}
                      onChange={(e) => ({ ...form, committee: e.target.value })}
                      type="text"
                      id="Committee"
                      name="Committee"
                      placeholder="E.g. ITSA "
                    />
                  </InputContainer>
                </Column>
                <Column>
                  <InputContainer tw="flex-1">
                    <Label htmlFor="Description">Description</Label>
                    <TextArea
                      value={form.description}
                      onChange={(e) => ({
                        ...form,
                        description: e.target.value,
                      })}
                      id="Description"
                      name="Description"
                      placeholder="E.g. Details about your event/repo"
                    />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="img">Only Images</Label>
                    <Input
                      value={form.images}
                      onChange={(e) => ({ ...form, images: e.target.value })}
                      accept="image/*"
                      id="img"
                      type="file"
                      name="img"
                      multiple
                      placeholder="E.g. IMAGE .png, .jpeg, .gif"
                    />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="pdfFile">Attachment File</Label>
                    <Input
                      value={form.file}
                      onChange={(e) => ({ ...form, file: e.target.value })}
                      id="pdfFile"
                      type="file"
                      name="pdfFile"
                      multiple
                      accept=".pdf,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel,.csv"
                      placeholder="E.g. PDF, EXCEL"
                    />
                  </InputContainer>
                </Column>
              </TwoColumn>

              <SubmitButton onClick={handleSubmit} type="submit" value="Submit">
                Submit
              </SubmitButton>
            </form>
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
};
