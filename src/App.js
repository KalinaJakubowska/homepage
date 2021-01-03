import { GlobalStyle } from "./GlobalStyle";
import { useEffect } from "react";
import { fetchGithubProjects } from "./githubSlice";
import { useDispatch } from "react-redux";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import Homepage from "./Homepage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGithubProjects());
  }, [dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
