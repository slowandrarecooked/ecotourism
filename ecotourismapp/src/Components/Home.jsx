import React from "react";
import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Cards } from "./Card";
import "./Home.css";
import video from '../video/homepagevideo.mp4'
import Navbar from "./Navbar";
import Footer from "./Footer1";
const Home = () => {
  return (
    <div
      // style={{
      //   // backgroundImage:
      //   //   "url(https://images.unsplash.com/photo-1552845108-5f775a2ccb9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80)",
      //   backgroundPosition: "center",
      //   backgroundSize: "cover",
      //   minHeight: "100vh",
      //   justifyContent: "center",
      // }}
    >
    <Navbar/>
    <video src={video} autoPlay loop muted style={{marginTop:"-67px"}}></video>
      <Box mt={16} ml={30} pt={50}>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          color="white"
          mt={200}
        >
          Discover the Hidden Gems
        </Text>
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          mb={4}
          color="whiteAlpha.900"
          mt={-5}
        >
          of Hillside Villages
        </Text>
        <Text
          fontSize="lg"
          textAlign="center"
          mb={8}
          color="white" // Set text color to white
        >
          Escape to breathtaking views, charming local traditions
        </Text>
        <Text fontSize="lg" textAlign="center" mb={8} color="white" mt={-6}>
          and sustainable lifestyles in Ecotourism picturesque hillside
          villages.
        </Text>

        <Button
          //   as={Rlink}
          //   to={"/destinations"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize="lg"
          fontWeight={600}
          color="black" // Set button text color to white
          p="5"
          mr="55px"
          borderRadius="20px"
          backgroundColor="#face54"
          _hover={{
            bg: "orange.300",
          }}
          mb={400}
          ml={20}
        >
          <Link to="/destination">Start Exploring</Link>
        </Button>
      </Box>
      <Footer/>
    </div>
  );
};

export default Home;
