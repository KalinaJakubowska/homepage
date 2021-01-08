import React from "react";
import { nanoid } from "@reduxjs/toolkit";
import Github from "./../features/Github/index";
import BigTile from "./../common/tiles/BigTile";
import { personalInfo } from "./../common/personalInfo";
import Header from "../features/Header";
import Footer from "../features/Footer";

const Homepage = () => (
  <>
    <Header />
    {personalInfo.map((sectionInfo) => (
      <BigTile
        key={nanoid()}
        title={sectionInfo.title}
        icon={sectionInfo.icon}
        list={sectionInfo.list}
        underline={sectionInfo.underline}
      />
    ))}
    <Github />
    <Footer />
  </>
);
export default Homepage;
