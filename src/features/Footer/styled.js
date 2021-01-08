import styled from "styled-components";
import { ReactComponent as GithubLogo } from "./../../assets/logos/githubLogo.svg";
import { ReactComponent as FacebookLogo } from "./../../assets/logos/facebookLogo.svg";
import { ReactComponent as LinkedinLogo } from "./../../assets/logos/linkedinLogo.svg";
import { ReactComponent as InstagramLogo } from "./../../assets/logos/instagramLogo.svg";

export const FooterWrapper = styled.footer`
  margin: 120px 0 0 0;
  width: 60%;
  margin-right: auto;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 12px;
  line-height: 1.3;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Email = styled.p`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 900;
  color: ${({ theme }) => theme.color.title};
  margin: 24px 0 0;
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.title};
  margin: 24px 0 0;
`;

export const LogosContainer = styled.div`
  display: flex;
  grid-gap: 24px;
  justify-content: start;
  grid-template-columns: repeat(auto-fill, 48px);
  grid-template-rows: 48px;
  margin: 56px 0 100px;
`;

export const StyledGithubLogo = styled(GithubLogo)`
  fill: ${({ theme }) => theme.color.title};
`;

export const StyledFacebookLogo = styled(FacebookLogo)`
  fill: ${({ theme }) => theme.color.title};
`;

export const StyledInstagramLogo = styled(InstagramLogo)`
  fill: ${({ theme }) => theme.color.title};
`;

export const StyledLinkedinLogo = styled(LinkedinLogo)`
  fill: ${({ theme }) => theme.color.title};
`;
