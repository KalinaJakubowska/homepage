import styled from "styled-components";
import { TileWrapper } from "../tileStyles";

export const GithubTileWrapper = styled(TileWrapper)`
  border: 6px solid rgba(209, 213, 218, 0.3);
  padding: 56px;
`;

export const GithubTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 1.4;
  color: ${({ theme }) => theme.color.button};
`;

export const GithubDescription = styled.p`
  line-height: 1.4;
  margin: 24px 0;
`;

export const GithubLinkWrapper = styled.span`
  display: block;
  margin-top: 8px;
`;

export const GithubLink = styled.a`
  display: inline;
  color: ${({ theme }) => theme.color.button};
`;
