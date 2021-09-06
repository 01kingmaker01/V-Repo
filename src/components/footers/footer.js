import React from "react";
import tw from "twin.macro";
import styled from "styled-components";

import LogoImage from "images/logo_vit.png";
import { ReactComponent as FacebookIcon } from "images/facebook-icon.svg";
import { ReactComponent as TwitterIcon } from "images/twitter-icon.svg";
import { ReactComponent as YoutubeIcon } from "images/youtube-icon.svg";
import { ReactComponent as LinkedinIcon } from "images/linkedin.svg";
import { ReactComponent as InstaIcon } from "images/insta.svg";
import { ReactComponent as UniversityIcon } from "images/university.svg";
import { ReactComponent as PhoneIcon } from "images/phone.svg";
import { ReactComponent as MapIcon } from "images/map.svg";
import { ReactComponent as MailIcon } from "images/mail.svg";

const Container = tw.div`relative bg-gray-200 text-gray-700 -mb-8  px-10 py-10 lg:py-24`;
const SixColumns = tw.div`flex flex-wrap justify-around `;

const Column = tw.div`my-2 flex flex-col w-full py-6 `;
// md:w-1/2 lg:w-1/3 xl:w-1/4`;

const Column1 = styled(Column)`
  ${tw` md:w-3/6 lg:w-2/5`}
`;
const Column2 = styled(Column)`
  ${tw`sm:w-1/3 md:w-1/6 md:mt-0 mt-6 lg:w-1/5`}
`;

const ColumnHeading = tw.h5`uppercase text-xl text-center font-bold`;

const LinkList = tw.ul` text-left text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;

const Link = tw.a`inline-block border-b-2 transform text-lg 
hocus:text-primary-700 border-transparent flex  justify-center hocus:border-primary-700 hocus:scale-105 pb-1 mt-2 transition duration-300`;

const Divider = tw.div`mb-16 border-b-2 border-gray-300 w-full`;

const ThreeColRow = tw.div`flex flex-col md:flex-row items-center justify-between`;

const LogoContainer = tw.div` p-4 rounded bg-primary-500  md:w-full lg:w-1/4`;
const LogoImg = tw.img`w-full`;

const CopywrightNotice = tw.p`text-center p-8 text-sm sm:text-base mt-8 md:mt-0 font-medium text-gray-600 `;

const SocialLinksContainer = tw.div`mt-8 md:mt-0 flex `;
const SocialLink = styled.a`
  ${tw`cursor-pointer p-2 rounded-full bg-gray-900 text-gray-100 hover:bg-gray-700 transition duration-300 mr-4 last:mr-0`}
  svg {
    ${tw`w-4 h-4`}
  }
`;
const IconCon = tw.div`w-8 p-1 h-10  flex-none`;
const TextCon = tw.div`ml-2 flex-grow`;
export default ({ margin }) => {
  console.log(margin);
  return (
    <Container css={[margin && tw`-mx-8`]}>
      <SixColumns>
        <Column1>
          <ColumnHeading>Contact us</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">
                <IconCon>
                  <UniversityIcon />
                </IconCon>
                <TextCon>
                  Vidyalankar Institute of Technology, Vidyalankar College Marg,
                  Wadala(E), Mumbai-400 037
                </TextCon>
              </Link>
            </LinkListItem>
            <LinkListItem>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="tel:2224161126"
              >
                <IconCon>
                  <PhoneIcon />
                </IconCon>
                <TextCon>
                  +91 222416 1126 COVID-19 Restricted Timings. Please Write to
                  Us
                </TextCon>
              </Link>
            </LinkListItem>
            <LinkListItem>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:example@example.com"
              >
                <IconCon>
                  <MailIcon />
                </IconCon>
                <TextCon>Write to Us</TextCon>
              </Link>
            </LinkListItem>
            <LinkListItem>
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://goo.gl/maps/xUjH9cS7SBo9UQ2E7"
              >
                <IconCon>
                  <MapIcon />
                </IconCon>
                <TextCon>Get Directions</TextCon>
              </Link>
            </LinkListItem>
          </LinkList>
        </Column1>
        <Column2>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Log In</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Personal</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Business</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Team</Link>
            </LinkListItem>
          </LinkList>
        </Column2>
        <Column2>
          <ColumnHeading>Press</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <Link href="#">Logos</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Events</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Stories</Link>
            </LinkListItem>
            <LinkListItem>
              <Link href="#">Office</Link>
            </LinkListItem>
          </LinkList>
        </Column2>
        {/* <Column>
            <ColumnHeading>Legal</ColumnHeading>
            <LinkList>
              <LinkListItem>
                <Link href="#">GDPR</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Privacy Policy</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Terms of Service</Link>
              </LinkListItem>
              <LinkListItem>
                <Link href="#">Disclaimer</Link>
              </LinkListItem>
            </LinkList>
          </Column> */}
        {/* <SubscribeNewsletterColumn>
            <SubscribeNewsletterContainer>
              <ColumnHeading>Subscribe to our Newsletter</ColumnHeading>
              <SubscribeText>
                We send email regarding new popular repo
              </SubscribeText>
              <SubscribeForm method="get" action="#">
                <Input type="email" placeholder="Your Email Address" />
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </SubscribeForm>
            </SubscribeNewsletterContainer>
          </SubscribeNewsletterColumn> */}
      </SixColumns>
      <Divider />
      <ThreeColRow>
        <LogoContainer>
          <LogoImg src={LogoImage} />
        </LogoContainer>
        <CopywrightNotice>
          Vidyalankar Institute of Technology is an Engineering & Management
          Institute approved by AICTE, New Delhi and Government of Maharashtra.
          The Institute is affiliated to University of Mumbai.{" "}
        </CopywrightNotice>
        <SocialLinksContainer>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.facebook.com/Vidyalankar.VIT/"
          >
            <FacebookIcon />
          </SocialLink>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/VIT_Vidyalankar"
          >
            <TwitterIcon />
          </SocialLink>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.youtube.com/channel/UCxRGJGcQw869LJ-btMhPOMA"
          >
            <YoutubeIcon />
          </SocialLink>

          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.instagram.com/vit_vidyalankar/"
          >
            <InstaIcon />
          </SocialLink>
          <SocialLink
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/school/vidyalankar-institute-of-technology-mumbai"
          >
            <LinkedinIcon />
          </SocialLink>
        </SocialLinksContainer>
      </ThreeColRow>
    </Container>
  );
};
