import styled from "styled-components";

export const PageWrapper = styled.div`
  color: ${({ theme }) => theme.elementColor.text};
  background: ${({ theme }) => theme.elementColor.background};
  transition: background 0.5s;
  padding: 14px;
`;
