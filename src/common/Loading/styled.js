import styled from "styled-components";

export const LoadingContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 88px 0 0;
  color: ${({ theme }) => theme.color.title};
`;

export const Image = styled.img`
  margin: 48px 0 20px;
  height: 160px;
  animation: spin;
  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  @keyframes spin {
    from {
      transform: unset;
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
