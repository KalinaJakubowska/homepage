import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Github from "./Github";
import BigTile from "./../common/tiles/BigTile";
import { personalInfo } from "./../common/personalInfo";
import Header from "./Header";
import Footer from "./Footer";
import { HomepageWrapper } from "./styled";

const Homepage = () => (
  <HomepageWrapper>
    <Header />
    {personalInfo.map((sectionInfo) => (
      <BigTile
        key={nanoid()}
        title={sectionInfo.title}
        icon={sectionInfo.icon}
        list={sectionInfo.list}
      />
    ))}
    <Github />
    <Footer />
  </HomepageWrapper>
);
export default Homepage;
