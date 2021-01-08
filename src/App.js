import { GlobalStyle } from "./GlobalStyle";
import { useEffect } from "react";
import { fetchGithubProjects } from "./githubSlice";
import { useDispatch, useSelector } from "react-redux";
import { ThemeProvider } from "styled-components";
import { darkTheme, theme } from "./theme";
import Homepage from "./Homepage";
import { selectIsDarkTheme } from "./themeSlice";

function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  useEffect(() => {
    dispatch(fetchGithubProjects());
  }, [dispatch]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
