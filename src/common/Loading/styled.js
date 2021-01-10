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

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 16px;
    margin-top: 56px;
  }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.ipad}px) {
    height: 76px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    height: 56px;
  }
`;
