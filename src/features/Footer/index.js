import React from "react";
import {
  FooterWrapper,
  Message,
  Email,
  Description,
  LogosContainer,
} from "./styled";
import { ReactComponent as GithubLogo } from "./../../assets/logos/githubLogo.svg";
import { ReactComponent as FacebookLogo } from "./../../assets/logos/facebookLogo.svg";
import { ReactComponent as LinkedinLogo } from "./../../assets/logos/linkedinLogo.svg";
import { ReactComponent as InstagramLogo } from "./../../assets/logos/instagramLogo.svg";

const Footer = () => {
  return (
    <FooterWrapper>
      <Message>Let's talk!</Message>
      <Email>kaljakubowska@gmail.com</Email>
      <Description>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me
      </Description>
      <LogosContainer>
        <GithubLogo />
        <FacebookLogo />
        <LinkedinLogo />
        <InstagramLogo />
      </LogosContainer>
    </FooterWrapper>
  );
};

export default Footer;
