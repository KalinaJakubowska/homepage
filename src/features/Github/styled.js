import styled from "styled-components";
import { ReactComponent as GithubLogo } from "./../../assets/logos/githubLogo.svg";

export const GithubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  color: ${({ theme }) => theme.color.title};

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    margin-top: 48px;
  }
`;

export const StyledGithubLogo = styled(GithubLogo)`
  fill: ${({ theme }) => theme.color.button};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Title = styled.p`
  font-size: 30px;
  line-height: 1.2;
  font-weight: 900;
  margin: 13px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 18px;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 8px 0 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 17px;
  }
`;

export const GithubTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  }
`;
