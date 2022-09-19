import React from "react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab as List,
  TabPanel,
  Box,
  Image,
} from "@chakra-ui/react";
import H2 from "../H2";
import P from "../P";
import { Button } from "../Button";
import bookmarktap1 from "../../assets/theme/image/illustration-features-tab-1.svg";
import bookmarktap2 from "../../assets/theme/image/illustration-features-tab-2.svg";
import bookmarktap3 from "../../assets/theme/image/illustration-features-tab-3.svg";

import backdrop from "../../assets/theme/image/backdropfeatrue.png";

const Tab = () => {
  return (
    <Tabs isLazy>
      <TabList
        flexDirection={{ base: "column", lg: "row" }}
        maxW={"730px"}
        marginInline={"auto"}
        borderTop={{ base: "1px solid #9194a1", lg: "0" }}
        borderWidth ={'1px'}
        borderInline = {'0'}
      >
        <List
          w={"full"}
          fontSize={"lg"}
          lineHeight={"shorter"}
          letterSpacing={"tighte"}
          color={"Neutral.GrayishBlue"}
          borderWidth={"1px"}
          borderRight="0"
          borderLeft="0"
          borderTop={"0"}
          borderColor={"Neutral.GrayishBlue"}
          _selected={{
            color: "Neutral.darkblue",
            borderColor: "primary.SoftRed",
            borderWidth: "5px",
            borderTop: "0",
            borderRight: "0",
            borderLeft: "0",
          }}
          px={"40px"}
          pb={{ base: "16px", lg: "30px" }}
          pt={{ base: "16px", lg: "12px" }}
        >
          Simple Bookmarking
        </List>
        <List
          w={"full"}
          fontSize={"lg"}
          lineHeight={"shorter"}
          letterSpacing={"tighte"}
          color={"Neutral.GrayishBlue"}
          borderWidth={"1px"}
          borderTop="0"
          borderRight="0"
          borderLeft="0"
          borderColor={"Neutral.GrayishBlue"}
          _selected={{
            color: "Neutral.darkblue",
            borderColor: "primary.SoftRed",
            borderWidth: "5px",
            borderTop: "0",
            borderRight: "0",
            borderLeft: "0",
          }}
          px={"40px"}
          pb={{ base: "16px", lg: "30px" }}
          pt={{ base: "16px", lg: "12px" }}
        >
          Speedy Searching
        </List>
        <List
          w={"full"}
          fontSize={"lg"}
          lineHeight={"shorter"}
          letterSpacing={"tighte"}
          color={"Neutral.GrayishBlue"}
          _selected={{
            color: "Neutral.darkblue",
            borderColor: "primary.SoftRed",
            borderWidth: "5px",
            borderTop: "0",
            borderRight: "0",
            borderLeft: "0",
          }}
          px={"40px"}
          pb={{ base: "16px", lg: "30px" }}
          pt={{ base: "16px", lg: "12px" }}
          borderWidth={"1px"}
          borderTop="0"
          borderRight="0"
          borderLeft="0"
          borderColor={"Neutral.GrayishBlue"}
        >
          Easy Sharing
        </List>
      </TabList>

      <TabPanels marginTop={"73px"}>
        <TabPanel
          p={"0"}
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: "70px", sm: "130px" }}
          alignItems={"center"}
        >
          <Box flex={"1"} position={"relative"}>
            <Image
              isolation={"isolate"}
              maxW={{ base: "100%", lg: "unset" }}
              src={bookmarktap1}
            />
            <Image
              src={backdrop}
              position={"absolute"}
              zIndex={"-1"}
              transform={"auto"}
              bottom={"0"}
              left={"0"}
              translateY={{ base: "20%", lg: "80px" }}
              translateX={{ base: "-20%", lg: "-200px" }}
              maxW={{ base: "100%", lg: "unset" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            flex={"1"}
            textAlign={{ base: "center", lg: "left" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            gap={{ base: "3", sm: "8" }}
          >
            <H2>Bookmark in one click</H2>
            <P letterSpacing={"0px"}>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </P>
            <Button display={"hide"}>More info</Button>
          </Box>
        </TabPanel>
        <TabPanel
          p={"0"}
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: "70px", sm: "130px" }}
          alignItems={"center"}
        >
          <Box flex={"1"} position={"relative"}>
            <Image
              isolation={"isolate"}
              maxW={{ base: "100%", lg: "unset" }}
              src={bookmarktap2}
            />
            <Image
              src={backdrop}
              position={"absolute"}
              zIndex={"-1"}
              transform={"auto"}
              bottom={"0"}
              left={"0"}
              translateY={{ base: "20%", lg: "80px" }}
              translateX={{ base: "-20%", lg: "-250px" }}
              maxW={{ base: "100%", lg: "unset" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            flex={"1"}
            textAlign={{ base: "center", lg: "left" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            gap={{ base: "3", sm: "8" }}
          >
            <H2> Speedy Searching</H2>
            <P letterSpacing={"0px"}>
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </P>
            <Button display={"hide"}>More info</Button>{" "}
          </Box>
        </TabPanel>
        <TabPanel
          p={"0"}
          display={"flex"}
          flexDirection={{ base: "column", lg: "row" }}
          gap={{ base: "70px", sm: "130px" }}
          alignItems={"center"}
        >
          <Box flex={"1"} position={"relative"}>
            <Image
              isolation={"isolate"}
              maxW={{ base: "100%", lg: "unset" }}
              src={bookmarktap3}
            />
            <Image
              src={backdrop}
              position={"absolute"}
              zIndex={"-1"}
              transform={"auto"}
              bottom={"0"}
              left={"0"}
              translateY={{ base: "20%", lg: "80px" }}
              translateX={{ base: "-20%", lg: "-250px" }}
              maxW={{ base: "100%", lg: "unset" }}
            />
          </Box>
          <Box
            display={"flex"}
            flexDirection={"column"}
            flex={"1"}
            textAlign={{ base: "center", lg: "left" }}
            alignItems={{ base: "center", lg: "flex-start" }}
            gap={{ base: "3", sm: "8" }}
          >
            <H2> Easy Sharing</H2>
            <P letterSpacing={"0px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex qui
              optio voluptatem sint itaque a quasi sequi est? Obcaecati quas
              ipsum nam vero voluptas omnis distinctio fugit sit iure fuga?
            </P>
            <Button display={"hide"}>More info</Button>
          </Box>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Tab;
