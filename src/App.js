import BigTile from "./common/tiles/BigTile";
import { GlobalStyle } from "./GlobalStyle";
import { skillset } from "./common/personalInfo";
import { plans } from "./common/personalInfo";
import { useEffect } from "react";
import { fetchGithubProjects } from "./githubSlice";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGithubProjects());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      <BigTile
        title={skillset.title}
        icon={skillset.icon}
        list={skillset.list}
      />
      <BigTile title={plans.title} icon={plans.icon} list={plans.list} />
    </>
  );
}

export default App;
