import {
  Container,
  Flex,
  Image,
  Link,
  HStack,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import logo from "../../assets/theme/image/logo-bookmark.svg";
import { Button } from "../Button";
import hamberger from "../../assets/theme/image/icon-hamburger.svg";
import Menu from "../Menu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isLargerThan748] = useMediaQuery("(min-width: 748px)");

  useEffect(() => {
    const removeScrollbar = () => {
      const body = document.querySelector("body");
      isLargerThan748 && setToggle(() => false);
      toggle
        ? (body.style.overflow = "hidden")
        : (body.style.overflow = "auto");
    };
    try {
      removeScrollbar();
    } catch (error) {
      console.log(error);
    }

    return () => {
      removeScrollbar();
    };
  }, [isLargerThan748, toggle]);

  return (
    <React.Fragment>
      {toggle && <Menu showmenu={() => setToggle((value) => !value)} />}
      <Container maxW={"container.lg"} h={"118px"}>
        <Flex as={"nav"} h={"full"}>
          <Flex alignItems={"center"} w={"full"}>
            <Link href={"#"}>
              <Image src={logo} />
            </Link>
            <HStack
              marginLeft={"auto"}
              as={"ul"}
              gap={"45px"}
              listStyleType={"none"}
              color={"Neutral.darkblue"}
              letterSpacing={"widest"}
              fontSize={"sm"}
              display={{ base: "none", md: "flex" }}
            >
              <li>
                <Link>FEATURES</Link>
              </li>
              <li>
                <Link>PRICING</Link>
              </li>
              <li>
                <Link>CONTACT</Link>
              </li>
            </HStack>
            <Box marginLeft={"50px"} display={{ base: "none", md: "block" }}>
              <Button style={"red"}>LOGIN</Button>
            </Box>
            <Box
              display={{ base: "block", md: "none" }}
              marginLeft={"auto"}
              cursor={"pointer"}
              onClick={() => setToggle((value) => !value)}
            >
              <Image src={hamberger} />
            </Box>
          </Flex>
        </Flex>
      </Container>
    </React.Fragment>
  );
};

export default Navbar;
