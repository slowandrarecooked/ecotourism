import logo from "./logo.svg";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "./App.css";
import { Destinations } from "./Components/destinations";



function App() {
  const theme = extendTheme({
    // Your custom theme configuration here
  });
  return (
    <div className="App">
      
      <ChakraProvider theme={theme}>
        <Destinations />
      </ChakraProvider>
    </div>
  );
}

export default App;
