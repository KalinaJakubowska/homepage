import React from "react";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import {
  GithubTilesContainer,
  GithubHeader,
  Title,
  Description,
} from "./styled";
import { selectGithubProjects } from "./../../githubSlice";
import GithubTile from "../../common/tiles/GithubTile";
import { selectError, selectLoading } from "../../githubSlice";
import Checker from "../../common/Checker";
import { ReactComponent as GithubLogo } from "./../../assets/logos/githubLogo.svg";
import { theme } from "../../theme";

const Github = () => {
  const githubProjects = useSelector(selectGithubProjects);
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  return (
    <Checker isLoading={isLoading} isError={isError}>
      <GithubHeader>
        <GithubLogo fill={theme.color.button}/>
        <Title>Portfolio</Title>
        <Description>My recent projects</Description>
      </GithubHeader>
      <GithubTilesContainer>
        {githubProjects.map((project) => (
          <GithubTile
            name={project.name}
            description={project.description}
            homepage={project.homepage}
            html_url={project.html_url}
            key={nanoid()}
          />
        ))}
      </GithubTilesContainer>
    </Checker>
  );
};

export default Github;
