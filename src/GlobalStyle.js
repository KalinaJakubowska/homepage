import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
   html {
      box-sizing: border-box;
      overflow-y: scroll;
   }

   *,
   ::before,
   ::after {
      box-sizing: inherit;
   }

   body {
      overflow-wrap: anywhere;
      color: ${({ theme }) => theme.elementColor.text};
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.05em;
      background: ${({ theme }) => theme.elementColor.background};
      min-height: 100vh;
      max-width: 1244px;
      padding: 14px;
      margin: 0 auto;
      font-size: 18px;
      transition: background 0.5s;
   }
`;
