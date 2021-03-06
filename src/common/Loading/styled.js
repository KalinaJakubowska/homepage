import styled from "styled-components";
import { ReactComponent as LoadingIcon } from "./loading.svg";

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
  color: ${({ theme }) => theme.elementColor.title};

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 16px;
    margin: 56px 0 30px;
  }
`;

export const StyledLoadingIcon = styled(LoadingIcon)`
  height: 160px;
  animation: spin 1s linear infinite;

  @keyframes spin {
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
