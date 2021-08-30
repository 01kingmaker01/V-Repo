/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { css } from "styled-components/macro"; //eslint-disable-line

import useAnimatedNavToggler from "../../helpers/useAnimatedNavToggler.js";

import logo from "../../images/vrepo.svg";
import User from "images/user.png";
import { ReactComponent as MenuIcon } from "feather-icons/dist/icons/menu.svg";
import { ReactComponent as PhoneIcon } from "feather-icons/dist/icons/phone-call.svg";
import { ReactComponent as EmailIcon } from "feather-icons/dist/icons/mail.svg";
import { ReactComponent as UserIcon } from "feather-icons/dist/icons/user.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";

import { auth } from "firebase/index.js";
import { DEL_USER } from "constants/index.js";
const Header = tw.header`
flex justify-between items-center
max-w-screen-xl mx-auto
`;

export const NavLinks = tw.div`inline-block`;
/* hocus: stands for "on hover or focus"
 * hocus:bg-primary-700 will apply the bg-primary-700 class on hover or focus
 */
export const NavLinkCon = tw.span`
text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent  hover:border-primary-500 hocus:text-primary-500
`;

// const ProfileCard = tw.div`bg-white rounded border flex py-4 px-8 absolute left-0 m-auto w-full `;

const ProfileCard = styled.div`
${tw`bg-white rounded-lg border flex flex-col py-8 px-8 absolute shadow-lg m-auto w-full`}
    @media (max-width:1023px) {
    left:0;
    right:0;
    bottom:-140%;
    height:max-content;
    min-width:13rem;}
@media (min-width:1024px) {
    top:6.5rem;
    right:2rem;
width:max-content    
    }
`

const UserImg = styled.div`
  ${tw`flex justify-center	 items-center	 mb-4 `};
  img {
    ${tw`rounded-full max-w-16 sm:max-w-20 sm:w-auto `}
  }
`;

const UserData = tw.div`
 ml-2 flex flex-col text-sm sm:text-base  justify-between  text-left mb-4 `;

const Line = styled.div`
display:flex;
align-items:center;

  @media (max-width:1023px) {
  font-size:.875rem;
  overflow-wrap: break-word;
  word-wrap: break-word;

  -ms-word-break: break-all;
  
  word-break: break-all;
  word-break: break-word;

  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;

}
svg{
  background
  display:block;
}


${tw`mb-2 last:mb-0`}
`
const LineLabel = styled(Line)`  background: #f0e0ff;
width:max-content;

${tw`text-xs font-semibold inline-block py-2 px-4 uppercase rounded-full text-primary-900  uppercase `} `


export const PrimaryLink = tw(NavLinkCon)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-white
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const PrimaryLinkBtn = tw.button`

px-8 py-3 rounded bg-primary-500 text-white
hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
border-b-0 text-lg my-2 lg:text-sm  mx-2 lg:my-0
font-semibold tracking-wide transition duration-300
 border-b-2 border-transparent hover:border-primary-500 `;

export const LogoLink = styled(NavLinkCon)`
  ${tw`flex items-center h-10 text-white border-b-0 text-2xl! mx-0`};

  img {
    ${tw`w-32 rounded`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 shadow absolute top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const IconCon = tw.div`w-8 p-1 h-10  flex-none flex items-center`

;



const Light = ({
  logoLink,
  userIcon,
  className,
  collapseBreakpointClass = "lg",
}) => {
  const { userReducer } = useSelector((state) => {
    return state;
  });
  const history = useHistory();
  const dispatch = useDispatch();

  const signOut = async () => {
    await auth.signOut().then(() => {
      console.log("Successfully signed out.");
      localStorage.removeItem("@user");
      dispatch({ type: DEL_USER, userPayload: "" });
      history.push("/login");
    });
  };

  userIcon = userIcon || User;

  const [open, setOpen] = useState(false);
  const navbarItemList = (props) => {
    return (
      <>
        <a onClick={() => setOpen(!open)}>
      <img style={{ height: "40px" }} src={userIcon} alt={"UserIcon"} /> 
        </a>

         
        {open && (
          <ProfileCard
          >
            <UserImg>
              <img src={userIcon} alt="userIcon" />
            </UserImg>
            <UserData>
              <Line>
              <IconCon>
              <UserIcon/>
              </IconCon>Ketan Rajaram Chavan</Line>
              <Line>
              <IconCon>
              <EmailIcon/>
              </IconCon>ketan.chavan@vit.edu.inketan.chavan@vit.edu.in</Line>
              <Line>
              <IconCon>
              <PhoneIcon/>
              </IconCon>0123456789</Line>
              <LineLabel>Student</LineLabel>
            </UserData>
             <PrimaryLinkBtn onClick={signOut}>SignOut</PrimaryLinkBtn>
          </ProfileCard>
        )}

      </>
    );
  };

  const defaultLinks = [
    <NavLinks key={1}>
      <NavLinkCon>
        <NavLink to="/">Home</NavLink>
      </NavLinkCon>

      {userReducer?.jobTitle === "Student" ||
      userReducer?.jobTitle === undefined ? null : (
        <NavLinkCon>
          <NavLink exact to="/add">
            Add
          </NavLink>
        </NavLinkCon>
      )}
      {userReducer?.jobTitle === "Student" ||
      userReducer?.jobTitle === undefined ? null : (
        <NavLinkCon>
          <NavLink to="/department">Departments</NavLink>
        </NavLinkCon>
      )}

      <NavLinkCon>
        <NavLink to="/about">About Us</NavLink>
      </NavLinkCon>

      <NavLinkCon>
        <NavLink to="/contact">Contact Us</NavLink>
      </NavLinkCon>

      <NavLinkCon>
        <NavLink to="/departments">Departments</NavLink>
      </NavLinkCon>
    </NavLinks>,

    <NavLinks key={2}>
      {navbarItemList()}
      {/* <img style={{ height: "40px" }} src={userIcon} alt={"UserIcon"} />{" "} */}
      {/* <div style={{ display: "flex" }}>
        <div>something smalll</div>
        <div>something big</div>
      </div>
      */}
    </NavLinks>,
  ];
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink href="/">
      <img src={logo} alt="logo" />
    </LogoLink>
  );

  logoLink = logoLink || defaultLogoLink;

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        {defaultLinks}
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {defaultLinks}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

export default Light;
