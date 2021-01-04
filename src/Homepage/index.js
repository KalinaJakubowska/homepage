import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Github from "./../features/Github/index";
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
    <Github />
  </>
);
export default Homepage;
