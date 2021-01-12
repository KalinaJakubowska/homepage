import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  GithubTilesContainer,
  GithubHeader,
  Title,
  Description,
  StyledGithubLogo,
} from "./styled";
import { selectGithubProjects } from "./../../githubSlice";
import GithubTile from "../../common/tiles/GithubTile";
import { selectError, selectLoading } from "../../githubSlice";
import Checker from "../../common/Checker";
import { githubUserName } from "../../common/personalInfo";

const Github = () => {
  const githubProjects = useSelector(selectGithubProjects);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <>
      <GithubHeader>
        <StyledGithubLogo />
        <Title>Portfolio</Title>
        <Description>My recent projects</Description>
      </GithubHeader>

      <Checker isLoading={isLoading} isError={isError}>
        <GithubTilesContainer>
          {githubProjects.map(
            (project) =>
              project.name === githubUserName || (
                <GithubTile
                  name={project.name}
                  description={project.description}
                  homepage={project.homepage}
                  html_url={project.html_url}
                  key={nanoid()}
                />
              )
          )}
        </GithubTilesContainer>
      </Checker>
    </>
  );
};

export default Github;
