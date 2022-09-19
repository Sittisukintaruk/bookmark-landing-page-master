import { Link } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const A = ({ href, onclick, children }) => {
  return (
    <Link _hover={{ textDecoration: "none" }} href={href} onClick={onclick}>
      {children}
    </Link>
  );
};

A.propTypes = {
  href: PropTypes.string,
  onclick: PropTypes.func,
  children: PropTypes.string,
};

export default A;
