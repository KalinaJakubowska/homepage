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
      overflow-wrap: anywhere;
   }

   body {
      color: ${({ theme }) => theme.color.text};
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.05em;
      background: ${({ theme }) => theme.color.background};
      min-height: 100vh;
      max-width: 1244px;
      padding: 14px;
      margin: 0 auto;
      font-size: 18px;
   }
`;
