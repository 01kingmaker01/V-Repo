import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import tw from "twin.macro";
import { useHistory } from "react-router";
import { makePost } from "../actions";
import "styles/input.css";

import Header, {
  NavLinkCon,
  LogoLink,
  NavToggle,
  DesktopNavLinks,
} from "./headers/light.js";

export const StyledHeader = styled(Header)`
  ${tw`pt-8 text-black px-10 max-w-none w-full`}
  ${DesktopNavLinks} ${NavLinkCon}, ${LogoLink} {
    ${tw`text-black hover:border-primary-500 hover:text-primary-500`}
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
  const { userReducer } = useSelector((state) => {
    return state;
  });
  const [form, setForm] = useState({
    title: "",
    committee: "",
    description: "",
    images: [],
    file: [],
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = (e) => {
    try {
      e.preventDefault();
      const formObj = new FormData();
      formObj.append("title", form.title);
      formObj.append("committee", form.description);
      formObj.append("author", userReducer.displayName);
      formObj.append("image", form.images);
      dispatch(makePost(formObj));
      history.push("/");
    } catch (e) {
      console.log(e);
    }
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
                      onChange={(e) =>
                        setForm({ ...form, title: e.target.value })
                      }
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
                      onChange={(e) =>
                        setForm({ ...form, committee: e.target.value })
                      }
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
                      onChange={(e) =>
                        setForm({
                          ...form,
                          description: e.target.value,
                        })
                      }
                      id="Description"
                      name="Description"
                      placeholder="E.g. Details about your event/repo"
                    />
                  </InputContainer>

                  <InputContainer>
                    <Label htmlFor="img">Only Images</Label>
                    <Input
                      onChange={(e) =>
                        setForm({ ...form, images: e.target.files[0] })
                      }
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
                      onChange={(e) =>
                        setForm({ ...form, file: e.target.files[0] })
                      }
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
