import React from "react";
import { GithubTileWrapper, GithubContainer } from "./styled";
import { selectGithubProjects, selectLoading } from "./../../../githubSlice";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const Github = () => {
  const isLoading = useSelector(selectLoading);
  const githubProjects = useSelector(selectGithubProjects);

  return (
    <GithubContainer>
      {!isLoading &&
        githubProjects.map((project) => (
          <GithubTileWrapper key={nanoid()}>{project.name}</GithubTileWrapper>
        ))}
    </GithubContainer>
  );
};

export default Github;
