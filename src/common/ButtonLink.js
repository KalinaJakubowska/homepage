import styled from "styled-components";

export const ButtonLink = styled.a`
  text-decoration: none;
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
  letter-spacing: 0.05em;
  transition: box-shadow 0.3s;

  :hover {
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: 2px -2px 0px #8cc2ff, -2px 2px 0px #8cc2ff, 2px 2px 0px #8cc2ff,
      -2px -2px 0px #8cc2ff;
  }

  :focus {
    border: 1px solid rgba(209, 213, 218, 0.3);
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    font-size: 18px;
  }
`;

export const ButtonText = styled.span`
  margin-left: 16px;
`;
