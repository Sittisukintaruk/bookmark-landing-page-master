import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Homepage from "./containers/Homepage";
import { theme } from "./assets/theme/theme";
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Homepage />
    </ChakraProvider>
  );
}

export default App;
