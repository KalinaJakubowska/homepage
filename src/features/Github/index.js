import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { GithubContainer } from "./styled";
import { selectGithubProjects } from "./../../githubSlice";
import GithubTile from "../../common/tiles/GithubTile";
import { selectError, selectLoading } from "../../githubSlice";
import Checker from "../../common/Checker";

const Github = () => {
  const githubProjects = useSelector(selectGithubProjects);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <Checker isLoading={isLoading} isError={isError}>
      <GithubContainer>
        {githubProjects.map((project) => (
          <GithubTile
            name={project.name}
            description={project.description}
            homepage={project.homepage}
            html_url={project.html_url}
            key={nanoid()}
          />
        ))}
      </GithubContainer>
    </Checker>
  );
};

export default Github;
