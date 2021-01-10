import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "./../../assets/icons/loading.svg";

export const LoadingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Info = styled.p`
  font-size: 20px;
  line-height: 1.4;
  margin: 88px 0 48px;
  color: ${({ theme }) => theme.color.title};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 16px;
    margin: 56px 0 30px;
  }
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
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
    height: 96px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    height: 56px;
  }
`;
