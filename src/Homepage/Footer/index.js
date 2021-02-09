import React from "react";
import {
  FooterWrapper,
  Message,
  Email,
  Description,
  LogosContainer,
  Link,
} from "./styled";
import { socialMedia } from "./socialMedia";
import { email } from "./../../common/personalInfo";

const Footer = () => {
  return (
    <FooterWrapper>
      <Message>Let's talk!</Message>
      <Email href={`mailto:${email}`}>{email}</Email>
      <Description>
        I’m always open to new projects whenever I have the time. If you have a
        website, dashboard or mobile app in mind and need some help to make your
        ideas come to life, feel free to contact me
      </Description>
      <LogosContainer>
        {socialMedia.map(({ name, link, Icon }) => (
          <Link href={link} title={name} target="_blank" rel="noreferrer">
            <Icon />
          </Link>
        ))}
      </LogosContainer>
    </FooterWrapper>
  );
};

export default Footer;
