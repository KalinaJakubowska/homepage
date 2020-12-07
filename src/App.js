import BigTile from "./common/tiles/BigTile";
import { GlobalStyle } from "./GlobalStyle";
import { personalInfo } from "./common/personalInfo";
import { useEffect } from "react";
import { fetchGithubProjects } from "./githubSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGithubProjects());
  }, [dispatch]);

  return (
    <>
      <GlobalStyle />
      {personalInfo.map((sectionInfo) => (
        <BigTile
          key={nanoid()}
          title={sectionInfo.title}
          icon={sectionInfo.icon}
          list={sectionInfo.list}
        />
      ))}
    </>
  );
}

export default App;
