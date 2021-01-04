import React from "react";
import {
  HeaderWrapper,
  Details,
  Announcement,
  Name,
  Description,
  Photo,
} from "./styled";
import { Button } from "./../../common/Button";

const Header = () => {
  return (
    <HeaderWrapper>
      <Photo />
      <Details>
        <Announcement>This is</Announcement>
        <Name>Kalina Jakubowska</Name>
        <Description>
          I'm a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </Description>
        <Button>Hire me</Button>
      </Details>
    </HeaderWrapper>
  );
};

export default Header;
