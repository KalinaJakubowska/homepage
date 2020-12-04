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
      font-family: 'Inter', sans-serif;
      background: #FBFBFE;
      min-height: 100vh;
      max-width: 1244px;
      padding: 14px;
      margin: 0 auto;
   }
`;
