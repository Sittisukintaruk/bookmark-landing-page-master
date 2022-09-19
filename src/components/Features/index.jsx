import React from "react";
import { Box } from "@chakra-ui/react";
import H2 from "../H2";
import P from "../P";
import Container from "../Container";
import Tab from "../Tab";

const Features = () => {
  return (
    <Container>
      <Box
        marginTop={"92px"}
        textAlign={"center"}
        maxW={"730px"}
        marginInline={"auto"}
        display={"flex"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box maxW={"552px"}>
          <H2>Features</H2>
          <P marginTop={"26px"}>
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </P>
        </Box>
      </Box>
      <Box width={"full"} marginTop={"58px"}>
        <Tab />
      </Box>
    </Container>
  );
};

export default Features;
