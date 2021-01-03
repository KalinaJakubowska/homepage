import React from "react";
import {
  GithubTileWrapper,
  GithubContainer,
  GithubTitle,
  GithubDescription,
  GithubLink,
  GithubLinkWrapper,
} from "./styled";
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
          <GithubTileWrapper key={nanoid()}>
            <GithubTitle>{project.name}</GithubTitle>
            <GithubDescription>{project.description}</GithubDescription>
            {project.homepage && (
              <GithubLinkWrapper>
                Demo: <GithubLink>{project.homepage}</GithubLink>
              </GithubLinkWrapper>
            )}
            {project.html_url && (
              <GithubLinkWrapper>
                Code: <GithubLink>{project.html_url}</GithubLink>
              </GithubLinkWrapper>
            )}
          </GithubTileWrapper>
        ))}
    </GithubContainer>
  );
};

export default Github;
