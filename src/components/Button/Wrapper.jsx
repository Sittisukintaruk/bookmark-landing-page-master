import React from "react";
import { Button } from "@chakra-ui/react";

const Wrapper = ({
  submit,
  children,
  style,
  display,
  small,
  full,
  bigText,
}) => {
  return (
    <Button
      type={submit && "submit"}
      textTransform={small && "capitalize"}
      display={display && { base: "none", sm: "block" }}
      size={{ base: bigText ? "lg" : "sm", md: "md" }}
      variant={style}
      w={{ base: full && "full", sm: "auto" }}
    >
      {children}
    </Button>
  );
};

export default Wrapper;
