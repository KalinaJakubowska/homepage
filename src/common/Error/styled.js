import styled from "styled-components";

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 430px;
  margin: auto;
  text-align: center;
`;

export const Alert = styled.p`
  color: ${({ theme }) => theme.color.title};
  font-size: 24px;
  line-height: 1.2;
  font-weight: bold;
  margin: 24px 0 0;
`;

export const Explanation = styled.p`
  color: ${({ theme }) => theme.color.title};
  margin: 32px 0 0;
  font-size: 20px;
  line-height: 1.4;
`;
