import React from "react";
import loadingIcon from "./../../assets/icons/loading.svg";
import { Image, Info, LoadingContainer } from "./styled";

const Loading = () => (
  <LoadingContainer>
    <Info>Please wait, projects are being loaded...</Info>
    <Image src={loadingIcon} />
  </LoadingContainer>
);

export default Loading;
