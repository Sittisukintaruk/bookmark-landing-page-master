import {
  Heading,
  Box,
  VStack,
  HStack,
  Center,
  Image,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Button } from "../Button";
import hero from "../../assets/theme/image/illustration-hero.svg";
import bgdrop from "../../assets/theme/image/backdrop.png";
import P from "../P";
import Container from "../Container";

const Header = () => {
  return (
    <Container>
      <Center h={{ base: "auto", lg: "570px" }} >
        <HStack flexDirection={{ base: "column", lg: "row" }} w={"full"}>
          <VStack
            flex={{ base: "2", lg: "1" }}
            order={{ base: "2", lg: "1" }}
            w={{ base: "full" }}
            gap={"8"}
            alignItems={{ base: "center", lg: "baseline" }}
            maxW = {'501px'}
          >
            <Flex
              flexDirection={{ base: "column" }}
              gap={{ base: "4", sm: "6" }}
              w={{ base: "full" }}
              textAlign={{ base: "center", lg: "left" }}
            >
              <Heading
                fontSize={{ base: "3xl", sm: "5xl" }}
                lineHeight={{ base: "2.125rem", sm: "10" }}
                letterSpacing={"wide"}
                color={"Neutral.VeryDarkBlue"}
              >
                A Simple Bookmark Manager
              </Heading>
              <P>
                A clean and simple interface to organize your favourite
                websites. Open a new browser tab and see your sites load
                instantly. Try it for free.
              </P>
            </Flex>
            <HStack
              w={""}
              justifyContent={{ base: "center", lg: "flex-start" }}
              gap={"14px"}
            >
              <Button >Get it on chrome</Button>
              <Button  style={"gray"}>Get it on Firefox</Button>
            </HStack>
          </VStack>
          <Box position={"relative"} flex={"1"} order={{ base: "1", lg: "2" }}>
            <Box
              position={{ base: "static", lg: "absolute" }}
              top={"50%"}
              transform={"auto"}
              translateY={{ base: "0", lg: "-50%" }}
              translateX={{ base: "0", lg: "7" }}
            >
              <Image maxW={{ base: "100%", lg: "unset" }} src={hero} />
              <Image
                position={"absolute"}
                top={"50%"}
                transform={"auto"}
                translateY={{ base: "-45%", lg: "-30%" }}
                src={bgdrop}
                translateX={"20%"}
                w={"full"}
                h={"80%"}
                zIndex="hide"
              />
            </Box>
          </Box>
        </HStack>
      </Center>
    </Container>
  );
};

export default Header;
