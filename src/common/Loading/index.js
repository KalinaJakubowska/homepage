import React from "react";
import { StyledLoadingIcon, Info, LoadingContainer } from "./styled";

const Loading = () => (
  <LoadingContainer>
    <Info>Please wait, projects are being loaded...</Info>
    <StyledLoadingIcon />
  </LoadingContainer>
);

export default Loading;
