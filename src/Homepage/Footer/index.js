import React from "react";
import {
  FooterWrapper,
  Message,
  Email,
  Description,
  LogosContainer,
  StyledGithubLogo,
  StyledFacebookLogo,
  StyledInstagramLogo,
  StyledLinkedinLogo,
} from "./styled";
import { socialMediaLinks } from "./../../common/personalInfo";

const Footer = () => {
  return (
    <FooterWrapper>
      <Message>Let's talk!</Message>
      <Email href="mailto:kaljakubowska@gmail.pl">
        kaljakubowska@gmail.com
      </Email>
      <Description>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me
      </Description>
      <LogosContainer>
        <a href={socialMediaLinks.github}>
          <StyledGithubLogo />
        </a>
        <a href={socialMediaLinks.facebook}>
          <StyledFacebookLogo />
        </a>
        <a href={socialMediaLinks.linkedin}>
          <StyledLinkedinLogo />
        </a>
        <a href={socialMediaLinks.instagram}>
          <StyledInstagramLogo />
        </a>
      </LogosContainer>
    </FooterWrapper>
  );
};

export default Footer;
