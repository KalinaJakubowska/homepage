import React from "react";
import {
  HeaderWrapper,
  Details,
  Announcement,
  Name,
  Description,
  Photo,
} from "./styled";
import { Button, ButtonText } from "./../../common/Button";
import { ReactComponent as MessageIcon } from "./../../assets/icons/message.svg";

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
        <Button>
          <MessageIcon />
          <ButtonText>Hire Me</ButtonText>
        </Button>
      </Details>
    </HeaderWrapper>
  );
};

export default Header;
