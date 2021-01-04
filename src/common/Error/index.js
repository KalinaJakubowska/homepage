import React from "react";
import { ErrorWrapper, Alert, Explanation } from "./styled";
import { ReactComponent as DangerIcon } from "./../../assets/icons/danger.svg";
import { Button } from "./../../common/Button";

const Error = () => (
  <ErrorWrapper>
    <DangerIcon />
    <Alert>Ooops! Something went wrong...</Alert>
    <Explanation>
      Sorry, failed to load Github projects. You can check them directly on
      Github.
    </Explanation>
    <Button>Go to Github</Button>
  </ErrorWrapper>
);

export default Error;
