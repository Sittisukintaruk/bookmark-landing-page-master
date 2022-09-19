import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import Card from "../Card";
import Container from "../Container";
import H2 from "../H2";
import P from "../P";

const Extension = () => {
  return (
    <Container>
      <Flex flexDirection={"column"} alignItems={"center"}>
        <Center maxW={"567px"}>
          <Flex
            flexDirection={"column"}
            alignItems={"center"}
            textAlign="center"
            marginTop={{ base: "120px", sm: "250px" }}
            gap={"0"}
          >
            <H2>Download the Extension</H2>
            <P marginTop={"6"}>
              We`ve got more browsers in the pipeline. Please do let us know if
              you`ve got a favourite you&quotd like us to prioritize.
            </P>
          </Flex>
        </Center>
        <Flex
          marginTop={{ base: "8", lg: "106px" }}
          gap={"30px"}
          flexWrap={"wrap"}
          justifyContent={"center"}
        >
          <Card typeExtension={"chrome"} />
          <Card typeExtension={"firefox"} />
          <Card typeExtension={"Opera"} />
        </Flex>
      </Flex>
    </Container>
  );
};

export default Extension;
