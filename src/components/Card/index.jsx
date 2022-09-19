import { Box, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import H3 from "../H3";
import logoChrome from "../../assets/theme/image/logo-chrome.svg";
import logoFirefox from "../../assets/theme/image/logo-firefox.svg";
import logoOpera from "../../assets/theme/image/logo-opera.svg";
import bgdrop from "../../assets/theme/image/bg-dots.svg";
import { Button } from "../Button";
import PropTypes from "prop-types";

const Card = ({ typeExtension }) => {
  const extension = {
    chrome: {
      type: "chrome",
      version: "62",
      src: logoChrome,
      loction: "0",
    },
    Firefox: {
      type: "firefox",
      version: "55",
      src: logoFirefox,
      loction: "40px",
    },
    Opera: {
      type: "opera",
      version: "46",
      src: logoOpera,
      loction: "80px",
    },
  };

  const getExtenion = (type) => {
    if (type === "chrome") {
      return extension.chrome;
    } else if (type === "firefox") {
      return extension.Firefox;
    } else {
      return extension.Opera;
    }
  };

  return (
    <Box
      py={"6"}
      px={"6"}
      shadow={"bluegray"}
      position={"relative"}
      top={{ base: "0", lg: getExtenion(typeExtension).loction }}
    >
      <Flex flexDirection={"column"}>
        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          gap={"8"}
        >
          <Image w={"100px"} h={"100px"} src={getExtenion(typeExtension).src} />
          <Flex flexDirection={"column"} gap={"4"} textAlign={"center"}>
            <H3>Add to {getExtenion(typeExtension).type}</H3>
            <Text>Minimum version {getExtenion(typeExtension).version}</Text>
          </Flex>
        </Box>
        <Box marginTop={"64px"} position={"relative"}>
          <Image
            src={bgdrop}
            position={"absolute"}
            transform={"auto"}
            top={"0"}
            translateY={"-30px"}
          />
          <Button small>Add & Install Extension</Button>
        </Box>
      </Flex>
    </Box>
  );
};

Card.propTypes = {
  typeExtension: PropTypes.oneOf(["chrome", "firefox", "Opera"]),
};
Card.defaultProps = {
  typeExtension: "chrome",
};

export default Card;
