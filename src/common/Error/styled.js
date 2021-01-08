import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 430px;
  margin: 96px auto 0;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin-top: 56px;
  }
`;

export const Alert = styled.p`
  color: ${({ theme }) => theme.color.title};
  font-size: 24px;
  line-height: 1.2;
  font-weight: bold;
  margin: 24px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    margin-top: 16px;
    font-size: 18px;
  }
`;

export const Explanation = styled.p`
  color: ${({ theme }) => theme.color.title};
  margin: 32px 0 0;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.bigMobile}px) {
    font-size: 14px;
  }
`;
