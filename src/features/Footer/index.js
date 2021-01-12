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
  Link,
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
        <Link href={socialMediaLinks.github}>
          <StyledGithubLogo />
        </Link>
        <Link href={socialMediaLinks.facebook}>
          <StyledFacebookLogo />
        </Link>
        <Link href={socialMediaLinks.linkedin}>
          <StyledLinkedinLogo />
        </Link>
        <Link href={socialMediaLinks.instagram}>
          <StyledInstagramLogo />
        </Link>
      </LogosContainer>
    </FooterWrapper>
  );
};

export default Footer;
