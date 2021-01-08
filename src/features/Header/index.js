import React from "react";
import {
  HeaderWrapper,
  Details,
  Announcement,
  Name,
  Description,
  Photo,
  ThemeSwitch,
  ThemeSwitchButton,
} from "./styled";
import { ReactComponent as LightThemeSwitchButton } from "./../../assets/icons/lightTheme.svg";
import { ReactComponent as DarkThemeSwitchButton } from "./../../assets/icons/darkTheme.svg";
import { ButtonLink, ButtonText } from "../../common/ButtonLink";
import { ReactComponent as MessageIcon } from "./../../assets/icons/message.svg";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme, switchIsDarkTheme } from "../../themeSlice";

const Header = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();

  const switchTheme = () => {
    dispatch(switchIsDarkTheme());
  };

  return (
    <HeaderWrapper>
      <ThemeSwitch isDarkTheme={isDarkTheme} onClick={switchTheme}>
        <ThemeSwitchButton isDarkTheme={isDarkTheme}>
          {isDarkTheme ? <DarkThemeSwitchButton /> : <LightThemeSwitchButton />}
        </ThemeSwitchButton>
      </ThemeSwitch>
      <Photo />
      <Details>
        <Announcement>This is</Announcement>
        <Name>Kalina Jakubowska</Name>
        <Description>
          I'm a passionate Frontend Developer in love with React, currently
          looking for new job opportunities.
        </Description>
        <ButtonLink>
          <MessageIcon />
          <ButtonText>Hire Me</ButtonText>
        </ButtonLink>
      </Details>
    </HeaderWrapper>
  );
};

export default Header;
