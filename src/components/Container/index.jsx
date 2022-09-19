import React from "react";
import { Container as Warpper } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Container = ({ children, h = "auto", footer }) => {
  return (
    <Warpper
      as={footer ? "div" : "section"}
      h={{ base: "auto", lg: h }}
      maxW={{ base: "full", md: "container.md", lg: "container.lg" }}
      px={{ base: "28px", md: "0" }}
    >
      {children}
    </Warpper>
  );
};

Container.propTypes = {
  children: PropTypes.PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  h: PropTypes.string,
  footer: PropTypes.bool,
};

Container.defaultProps = {
  children: "",
  h: "auto",
  footer: false,
};

export default Container;
