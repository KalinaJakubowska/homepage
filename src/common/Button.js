import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.color.button};
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  line-height: 1.2;
  font-weight: 600;
  padding: 12px 16px;
  border: 1px solid rgba(209, 213, 218, 0.3);
  border-radius: 4px;
  width: fit-content;
  margin: 32px 0 0 0;
  outline: none;
  letter-spacing: 0.05em;

  :hover {
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    outline: none;
  }

  :focus {
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const ButtonText = styled.span`
  margin-left: 16px;
`;
