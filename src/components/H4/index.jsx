import React from "react";
import { Heading } from "@chakra-ui/react";

const H4 = ({ children }) => {
  return (
    <Heading
      as={"h4"}
      lineHeight={"shorter"}
      color={"Neutral.darkblue"}
      fontSize={"lg"}
      fontWeight = {'normal'}
    >
      {children}
    </Heading>
  );
};

export default H4;
