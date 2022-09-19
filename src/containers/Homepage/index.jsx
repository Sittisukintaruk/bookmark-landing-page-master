import React from "react";
import Extension from "../../components/Extension";
import Features from "../../components/Features";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Questions from "../../components/Questions";
import Stayup from "../../components/Stayup";
import Header from "../../components/็Header";
import { Box } from "@chakra-ui/react";

const Homepage = () => {
  return (
    <React.Fragment>
      <Box overflow={"hidden"}>
        <Navbar />
        <Header />
        <Features />
        <Extension />
        <Questions />
        <Stayup />
        <Footer />
      </Box>
    </React.Fragment>
  );
};

export default Homepage;
