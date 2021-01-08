import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin: 101px auto 63px;
  align-items: center;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    flex-direction: column;
  }
`;

export const Photo = styled.div`
  background-color: ${({ theme }) => theme.colors.slateGray};
  width: 398px;
  height: 398px;
  border-radius: 50%;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    width: 200px;
    height: 200px;
  }
`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 66px;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin: 20px 0 0 0;
    align-items: center;
  }
`;

export const Announcement = styled.p`
  text-transform: uppercase;
  font-size: 12px;
  line-height: 1.3;
  font-weight: bold;
  margin: 0;
`;

export const Name = styled.p`
  margin: 12px 0 0 0;
  font-weight: 900;
  font-size: 38px;
  line-height: 1.3;
  color: ${({ theme }) => theme.color.title};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 22px;
    line-height: 1.2;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 35px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    text-align: center;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 17px;
  }
`;

export const ThemeSwitch = styled.div`
  background-color: ${({ theme }) => theme.color.themeSwitchBackground};
  width: 47px;
  height: 25px;
  top: 0;
  right: 0;
  position: absolute;
  display: flex;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.color.themeSwitchBorder};
  border-radius: 25%/50%;
  padding: 2px;
  transition: all 0.5s;
`;

export const ThemeSwitchButton = styled.div`
  margin-left: ${({ isDarkTheme }) =>
    isDarkTheme ? "calc(100% - 20px)" : "0"};
  width: 20px;
  height: 20px;
  position: relative;
  transition: margin 0.5s;
`;
