import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import GithubTile from "./../common/tiles/GithubTile";
import BigTile from "./../common/tiles/BigTile";
import { personalInfo } from "./../common/personalInfo";

const Homepage = () => (
  <>
    {personalInfo.map((sectionInfo) => (
      <BigTile
        key={nanoid()}
        title={sectionInfo.title}
        icon={sectionInfo.icon}
        list={sectionInfo.list}
      />
    ))}
    <GithubTile />
  </>
);
export default Homepage;
