import React from "react";

import { StyleCustomButtonContainer } from "./custom-button.styles";

const CustomButton = ({ children, ...props }) => (
  <StyleCustomButtonContainer {...props}>{children}</StyleCustomButtonContainer>
);

export default CustomButton;
