import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import ReactModalAdapter from "../helpers/ReactModalAdapter.js";

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex h-24 justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const Modal = ({ modalIsOpen, toggleModal, msg }) => {
  return (
    <>
      {modalIsOpen ? (
        <StyledModal
          closeTimeoutMS={300}
          className="mainHeroModal"
          isOpen={modalIsOpen}
          onRequestClose={toggleModal}
          shouldCloseOnOverlayClick={true}
        >
          <CloseModalButton onClick={toggleModal}>
            <CloseIcon tw="w-6 h-6" />
          </CloseModalButton>
          <div className="content">{msg}</div>
        </StyledModal>
      ) : null}
    </>
  );
};

export default Modal;
