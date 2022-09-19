import { Heading } from "@chakra-ui/react";

const H2 = ({ children, white }) => {
  return (
    <Heading
      fontSize={{ base: "xl", sm: "4xl" }}
      lineHeight={"150%"}
      letterSpacing={"wide"}
      fontWeight={"medium"}
      color={white ? "white" : "Neutral.darkblue"}
      as={"h2"}
    >
      {children}
    </Heading>
  );
};

export default H2;
