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
      min-height: 100vh;
      max-width: 1244px;
      padding: 14px;
      margin: 0 auto;
   }
`;
