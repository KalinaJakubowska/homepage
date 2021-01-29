import React from "react";
import {
  GithubTileWrapper,
  GithubTitle,
  GithubDescription,
  GithubLink,
  GithubLinkWrapper,
} from "./styled";

const GithubTile = ({ name, description, homepage, html_url }) => {
  const formattedName = (name[0].toUpperCase() + name.substring(1)).replaceAll(
    "-",
    " "
  );

  return (
    <GithubTileWrapper>
      <GithubTitle>{formattedName}</GithubTitle>
      {description && <GithubDescription>{description}</GithubDescription>}
      <div>
        {homepage && (
          <GithubLinkWrapper>
            <GithubLink href={homepage}>See demo</GithubLink>
          </GithubLinkWrapper>
        )}
        {html_url && (
          <GithubLinkWrapper>
            <GithubLink href={html_url}>Go to the repository</GithubLink>
          </GithubLinkWrapper>
        )}
      </div>
    </GithubTileWrapper>
  );
};

export default GithubTile;
