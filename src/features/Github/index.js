import React from "react";
import { GithubContainer } from "./styled";
import { selectGithubProjects, selectLoading } from "./../../githubSlice";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import GithubTile from "../../common/tiles/GithubTile";

const Github = () => {
  const isLoading = useSelector(selectLoading);
  const githubProjects = useSelector(selectGithubProjects);

  return (
    <GithubContainer>
      {!isLoading &&
        githubProjects.map((project) => (
          <GithubTile
            name={project.name}
            description={project.description}
            homepage={project.homepage}
            html_url={project.html_url}
            key={nanoid()}
          />
        ))}
    </GithubContainer>
  );
};

export default Github;
