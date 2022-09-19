import React from "react";
import {
  Accordion as Accord,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import H4 from "../H4";

const listAccordion = [
  {
    title: "What is Bookmark?",
    detail:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt" +
      " justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
  },
  {
    title: "How can I request a new browser?",
    detail:
      "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies." +
      "Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
  },
  {
    title: "Is there a mobile app?",
    detail:
      "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum  urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
  },
  {
    title: "What about other Chromium browsers?",
    detail:
      "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
  },
];

const Accordion = () => {
  return (
    <Accord allowMultiple>
      {listAccordion.map(({ title, detail }, index) => (
        <AccordionItem key={index}>
          <H4>
            <AccordionButton
              lineHeight={{ base: "125%", sm: "shorter" }}
              color={"Neutral.darkblue"}
              fontSize={{ base: "sm", sm: "lg" }}
              letterSpacing={{ base: "tight", sm: "normal" }}
              fontWeight={"medium"}
              py={"5"}
              pl={"0"}
              pr={"5"}
              _hover={{ color: "primary.SoftRed" }}
              _expanded={{ color: "primary.SoftRed" }}
            >
              <Box flex="1" textAlign="left">
                {title}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </H4>
          <AccordionPanel
            fontSize={{ base: "sm", md: "md" }}
            lineHeight={{ base: "24px", md: "36px" }}
            letterSpacing={{ sm: "tightt", md: "widee" }}
            pb={4}
            pl={"0"}
            color={"Neutral.GrayishBlue"}
            pr={{base:'0',md:"3rem"}}
          >
            {detail}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accord>
  );
};

export default Accordion;
