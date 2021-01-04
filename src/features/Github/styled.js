import styled from "styled-components";

export const GithubHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;
  color: ${({ theme }) => theme.color.title};
`;

export const GithubTilesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;
  margin-top: 24px;
`;

export const Title = styled.p`
  font-size: 30px;
  line-height: 1.2;
  font-weight: 900;
  margin: 13px 0 0 0;
`;

export const Description = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 8px 0 0 0;
`;
