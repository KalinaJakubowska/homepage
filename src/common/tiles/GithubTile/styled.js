import styled from "styled-components";
import { TileWrapper } from "../tileStyles";

export const GithubTileWrapper = styled(TileWrapper)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 6px solid rgba(209, 213, 218, 0.3);
  padding: 56px;
  transition: border-color 0.3s;

  :hover {
    border: 6px solid ${({ theme }) => theme.color.githubTileHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    padding: 36px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    padding: 28px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 16px;
  }
`;

export const GithubTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.githubTileTitle};
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 16px;
  }
`;

export const GithubDescription = styled.p`
  line-height: 1.4;
  margin: 0 0 16px 0;
  flex-grow: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
    margin: 0 0 8px 0;
  }
`;

export const GithubLinkWrapper = styled.span`
  display: block;
  margin-top: 8px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;

export const GithubLink = styled.a`
  text-decoration: none;
  display: inline;
  color: ${({ theme }) => theme.color.button};
  border-bottom: 1px solid ${({theme}) => theme.color.githubTileHover};
  transition: filter 0.3s;

  :hover {
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
    line-height: 1.2;
  }
`;
