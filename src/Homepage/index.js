import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Github from "./Github";
import BigTile from "./../common/tiles/BigTile";
import { personalInfo } from "./../common/personalInfo";
import Header from "./Header";
import Footer from "./Footer";

const Homepage = () => (
  <>
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
  </>
);
export default Homepage;
