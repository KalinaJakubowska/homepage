import styled from "styled-components";
import { ReactComponent as GithubLogo } from "./../../assets/logos/githubLogo.svg";
import { ReactComponent as FacebookLogo } from "./../../assets/logos/facebookLogo.svg";
import { ReactComponent as LinkedinLogo } from "./../../assets/logos/linkedinLogo.svg";
import { ReactComponent as InstagramLogo } from "./../../assets/logos/instagramLogo.svg";

export const FooterWrapper = styled.footer`
  margin: 140px 0 0;
  max-width: 60%;
  margin-right: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin-top: 76px;
    max-width: unset;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin-top: 56px;
  }
`;

export const Message = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Email = styled.a`
  display: block;
  text-decoration: none;
  font-size: 32px;
  line-height: 1.2;
  font-weight: 900;
  color: ${({ theme }) => theme.color.title};
  margin-top: 24px;
  transition: color 0.3s;

  :hover {
    color: ${({ theme }) => theme.color.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigScreen}px) {
    font-size: 28px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    font-size: 24px;
    line-height: 1.2;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
    line-height: 1.2;
    margin: 12px 0 0;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.title};
  margin: 24px 0 0;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 12px 0 0;
  }
`;

export const LogosContainer = styled.div`
  display: flex;
  justify-content: start;
  margin: 56px 0 100px;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin: 40px 0 32px;
  }
`;

const iconsStyles = {
  width: "48px",
  height: "48px",
  "margin-right": "24px",
  transition: "fill 0.3s",
};

const iconsBigMobileStyles = {
  width: "32px",
  height: "32px",
  "margin-right": "16px",
};

export const StyledGithubLogo = styled(GithubLogo)`
  fill: ${({ theme }) => theme.color.title};
  ${iconsStyles}

  :hover {
    fill: ${({ theme }) => theme.color.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    ${iconsBigMobileStyles}
  }
`;

export const StyledFacebookLogo = styled(FacebookLogo)`
  fill: ${({ theme }) => theme.color.title};
  ${iconsStyles}

  :hover {
    fill: ${({ theme }) => theme.color.button};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    ${iconsBigMobileStyles}
  }
`;

export const StyledInstagramLogo = styled(InstagramLogo)`
  fill: ${({ theme }) => theme.color.title};
  ${iconsStyles}

  :hover {
    fill: ${({ theme }) => theme.color.button};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    ${iconsBigMobileStyles}
  }
`;

export const StyledLinkedinLogo = styled(LinkedinLogo)`
  fill: ${({ theme }) => theme.color.title};
  ${iconsStyles}

  :hover {
    fill: ${({ theme }) => theme.color.button};
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    ${iconsBigMobileStyles}
  }
`;
