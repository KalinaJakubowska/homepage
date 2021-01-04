import React from "react";
import { GithubContainer } from "./styled";
import {
  selectGithubProjects,
  selectLoading,
  selectError,
} from "./../../githubSlice";
import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import GithubTile from "../../common/tiles/GithubTile";
import Error from "./../../common/Error";
import Loading from "./../../common/Loading";

const Github = () => {
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);
  const githubProjects = useSelector(selectGithubProjects);

  return (
    <GithubContainer>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <Error />
      ) : (
        githubProjects.map((project) => (
          <GithubTile
            name={project.name}
            description={project.description}
            homepage={project.homepage}
            html_url={project.html_url}
            key={nanoid()}
          />
        ))
      )}
    </GithubContainer>
  );
};

export default Github;
