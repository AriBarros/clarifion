import "./App.css";
import Home from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import { Theme } from "./styles/theme";

function App() {
  return (
    <ChakraProvider theme={Theme}>
      <Home />
    </ChakraProvider>
  );
}

export default App;
