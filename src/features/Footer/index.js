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
        <Link href="https://github.com/KalinaJakubowska"><StyledGithubLogo /></Link>
        <Link href="https://www.facebook.com/kalina.brzezinska"><StyledFacebookLogo /></Link>
        <Link href="https://www.linkedin.com/in/kalina-j-80a6031aa/"><StyledLinkedinLogo /></Link>
        <Link href="https://www.instagram.com/witillie/"><StyledInstagramLogo /></Link>
      </LogosContainer>
    </FooterWrapper>
  );
};

export default Footer;
