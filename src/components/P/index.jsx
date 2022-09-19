import { Text } from "@chakra-ui/react";

const P = ({ children, marginTop = "0", letterSpacing = "0" }) => {
  return (
    <Text
      fontSize={{ base: "sm", sm: "lg" }}
      lineHeight={{ base: "short", sm: "7" }}
      color={"Neutral.GrayishBlue"}
      letterSpacing={{ base: "wide" , sm:'0'}}
      marginTop={marginTop}
    >
      {children}
    </Text>
  );
};

export default P;
