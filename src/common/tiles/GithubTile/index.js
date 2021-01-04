import React from "react";
import {
  GithubTileWrapper,
  GithubTitle,
  GithubDescription,
  GithubLink,
  GithubLinkWrapper,
} from "./styled";

const GithubTile = ({ name, description, homepage, html_url }) => {
  return (
    <GithubTileWrapper>
      <GithubTitle>{name}</GithubTitle>
      {description && <GithubDescription>{description}</GithubDescription>}
      {homepage && (
        <GithubLinkWrapper>
          Demo: <GithubLink>{homepage}</GithubLink>
        </GithubLinkWrapper>
      )}
      {html_url && (
        <GithubLinkWrapper>
          Code: <GithubLink>{html_url}</GithubLink>
        </GithubLinkWrapper>
      )}
    </GithubTileWrapper>
  );
};

export default GithubTile;
