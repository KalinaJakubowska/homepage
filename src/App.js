import { GlobalStyle } from "./GlobalStyle";
import { Normalize } from "styled-normalize";
import { useEffect } from "react";
import { fetchGithubProjects } from "./githubSlice";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./common/theme/theme";
import Homepage from "./Homepage";
import { selectIsDarkTheme } from "./common/theme/themeSlice";
import { PageWrapper } from "./styled";

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  useEffect(() => {
    dispatch(fetchGithubProjects());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <Normalize />
      <GlobalStyle />
      <PageWrapper>
        <Homepage />
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;
