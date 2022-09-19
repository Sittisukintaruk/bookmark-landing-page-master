import { Box, Center  } from "@chakra-ui/react";
import React from "react";
import Accordion from "../Accordion";
import Container from "../Container";
import H2 from "../H2";
import P from "../P";
import { Button } from "../Button";

const Questions = () => {
  return (
    <Container>
      <Box display={"flex"} flexDirection={"column"} marginTop={{base:'75px',md:"150px"}} pb = {'70px'}>
        <Center
          mx={"auto"}
          flexDirection={"column"}
          gap={"6"}
          maxW={"497px"}
          textAlign={"center"}
        >
          <H2>Frequently Asked Questions</H2>
          <P>
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </P>
        </Center>
        <Box marginTop={"60px"} mx={"auto"} w={"full"} maxW={"544px"}>
          <Accordion />
        </Box>
        <Box mx={"auto"} marginTop={'12'}>
          <Button small >More info</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Questions;
