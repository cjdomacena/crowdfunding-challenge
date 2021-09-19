import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "../../Theme";
import { FundTextContainer, FundHeader, FundFooter } from "./FundTextStyle";

export const FundText = ({fundHeader, fundFooter}) => {
  return (
    <ThemeProvider theme={theme}>
      <FundTextContainer>
        <FundHeader>{fundHeader}</FundHeader>
        <FundFooter>{fundFooter}</FundFooter>
      </FundTextContainer>
    </ThemeProvider>
  );
};

export default FundText;