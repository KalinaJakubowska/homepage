import React from "react";
import { ErrorWrapper, Alert, Explanation } from "./styled";
import { ReactComponent as DangerIcon } from "./danger.svg";
import { ButtonLink } from "../ButtonLink";

const Error = () => (
  <ErrorWrapper>
    <DangerIcon />
    <Alert>Ooops! Something went wrong...</Alert>
    <Explanation>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Explanation>
    <ButtonLink href="https://github.com/KalinaJakubowska">Go to Github</ButtonLink>
  </ErrorWrapper>
);

export default Error;
