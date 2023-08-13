import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { BsFill1SquareFill, BsFill3SquareFill } from "react-icons/bs";
import { GrFormSubtract, GrFormAdd } from "react-icons/gr";
import Price from "./Price";
import TravellerDetails from "./TravellerDetails";
import PaymentDetails from "./PaymentDetails";

function Payment() {
  return (
    <Box minH={"100vh"} bg={"gray.100"} color={"blackAlpha.800"}>
      <Box w={{ base: "92%", md: "95%", lg: "76%" }} m={"auto"}>
        <Flex py={"30px"}>
          <Text
            fontSize={{ base: "20px", md: "33px", lg: "33px" }}
            fontWeight={"600"}
          >
            Lorem ipsum, dolor sit amet consectetur.
          </Text>
          <Spacer />
          <Button
            colorScheme="none"
            bg={"white"}
            color={"blackAlpha.800"}
            mr={"10px"}
            borderRadius={"20px"}
            display={{ base: "none", md: "block", lg: "block" }}
          >
            Need Help?
          </Button>
          <Button
            colorScheme="none"
            bg={"white"}
            color={"blackAlpha.800"}
            borderRadius={"20px"}
            display={{ base: "none", md: "block", lg: "block" }}
          >
            Share Your Journey
          </Button>
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Box w={{ base: "100%", md: "100%", lg: "67%" }}>
            <Box
              my={"25px"}
              p={"20px"}
              borderRadius={"15px"}
              bg={"white"}
              boxShadow={"md"}
            >
              <HStack>
                <BsFill1SquareFill size={"30px"} />
                <Text
                  pb={"5px"}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  px={"10px"}
                >
                  How Many Travelers Are Exploring?
                </Text>
              </HStack>
              <HStack mt={"30px"}>
                <Text fontWeight={"700"}>2 x traveller </Text>
                <Spacer />
                <HStack>
                  <IconButton
                    icon={<GrFormSubtract size={"25px"} />}
                    rounded={"full"}
                    boxShadow={"lg"}
                  />
                  <Text px={"10px"}>2</Text>
                  <IconButton
                    icon={<GrFormAdd size={"25px"} />}
                    rounded={"full"}
                    boxShadow={"lg"}
                  />
                </HStack>
              </HStack>
            </Box>

            <TravellerDetails />

            <Box
              my={"25px"}
              p={"20px"}
              borderRadius={"15px"}
              bg={"white"}
              boxShadow={"md"}
            >
              <HStack>
                <BsFill3SquareFill size={"30px"} />
                <Text
                  pb={"5px"}
                  fontWeight={"700"}
                  fontSize={"20px"}
                  px={"10px"}
                >
                  Adventour Savings
                </Text>
              </HStack>
              <Text
                mt={"30px"}
                mb={"8px"}
                color={"blue.500"}
                cursor={"pointer"}
              >
                Redeem Promo Code
              </Text>
            </Box>

            <PaymentDetails />
          </Box>

          <Box w={"31%"} display={{ base: "none", md: "none", lg: "block" }}>
            <Box
              display={{ base: "none", md: "none", lg: "block" }}
              p={"20px"}
              borderRadius={"15px"}
              bg={"white"}
              boxShadow={"md"}
              lineHeight={"25px"}
            >
              <Text pb={"15px"} fontSize={"20px"} fontWeight={"700"}>
                My Trip
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"}>
                days
              </Text>
              <Text pb={"10px"} fontSize={"15px"}>
                2 days
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"}>
                Starts in,{" "}
              </Text>
              <Text pb={"10px"} fontSize={"15px"}>
                Sunday, 20 Aug 2023
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"}>
                Ends in ,{" "}
              </Text>
              <Text pb={"10px"} fontSize={"15px"}>
                Thursday, 31 Aug 2023
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"}>
                Tour Type
              </Text>
              <Text pb={"10px"} fontSize={"15px"}>
                Group
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"}>
                Operated in
              </Text>
              <Text pb={"10px"} fontSize={"15px"}>
                English
              </Text>
              <Text fontSize={"15px"} fontWeight={"600"}>
                What's included
              </Text>
              <Text pb={"10px"} fontSize={"15px"}>
                Accommodation, Guide, Meals, Transport
              </Text>
            </Box>
            <Price />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Payment;
