import { Container, Flex } from "@radix-ui/themes"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from "./components/NavBar";

import { configureWeb3Modal } from "./connections";

configureWeb3Modal()

function App() {

  return (
    <Container>
      <NavBar />
      <ToastContainer theme="dark" />
      <Flex justify={"center"}>
        {/* {isConnected ? <StakingCard /> : <w3m-connect-button />} */}
      </Flex>
    </Container>
  )
}

export default App
