import { Heading } from "@chakra-ui/react";
import React from "react";

const H3 = ({ children }) => {
  return (
    <Heading
      as={"h3"}
      letterSpacing={"wide"}
      fontWeight={"medium"}
      fontSize={"xl"}
      color={"Neutral.darkblue"}
      lineHeight={"5"}
    >
      {children}
    </Heading>
  );
};

export default H3;
