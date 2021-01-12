import React from "react";
import {
  GithubTileWrapper,
  GithubTitle,
  GithubDescription,
  GithubLink,
  GithubLinkWrapper,
} from "./styled";

const GithubTile = ({ name, description, homepage, html_url }) => {
  name = (name[0].toUpperCase() + name.substring(1)).split("-").join(" ");

  return (
    <GithubTileWrapper>
      <GithubTitle>{name}</GithubTitle>
      {description && <GithubDescription>{description}</GithubDescription>}
      <div>
        {homepage && (
          <GithubLinkWrapper>
            Demo: <GithubLink href={homepage}>See demo</GithubLink>
          </GithubLinkWrapper>
        )}
        {html_url && (
          <GithubLinkWrapper>
            Code: <GithubLink href={html_url}>Go to the repository</GithubLink>
          </GithubLinkWrapper>
        )}
      </div>
    </GithubTileWrapper>
  );
};

export default GithubTile;
