import React from "react";
import { BsFillInfoCircleFill, BsFill4SquareFill } from "react-icons/bs";
import { GrRadialSelected } from "react-icons/gr";
import {
  Box,
  Flex,
  Text,
  Button,
  Spacer,
  HStack,
  Input,
  Image,
  Checkbox,
} from "@chakra-ui/react";
function PaymentDetails() {
  return (
    <Box
      my={"25px"}
      p={"20px"}
      boxShadow={"md"}
      bg={"white"}
      borderRadius={"15px"}
    >
      <HStack>
        <BsFill4SquareFill size={"30px"} />
        <Text pb={"5px"} fontWeight={"700"} fontSize={"20px"} px={"10px"}>
          Add payment details
        </Text>
      </HStack>

      <HStack p={"15px"} my={"20px"} bg={"gray.200"} borderRadius={"15px"}>
        <BsFillInfoCircleFill size={"20px"} />
        <Text
          px={"10px"}
          align={"left"}
          fontSize={{ base: "14px", md: "16px", lg: "16px" }}
          fontWeight={"400"}
          color={"blackAlpha.800"}
        >
          This is a secure and SSL encrypted payment. Your credit card details
          are safe.
        </Text>
      </HStack>

      <Box>
        <Text py={"10px"} fontSize={"16px"}>
          Select your payment method:
        </Text>
        <Box
          boxShadow={"md"}
          border={"1px solid silver"}
          bg={"white"}
          borderRadius={"15px"}
        >
          <HStack
            borderBottom={"1px solid silver"}
            p={"15px"}
            borderRadius={"15px 15px 0 0 "}
          >
            <GrRadialSelected size={"20px"} color={"blue"} />
            <Text
              px={"10px"}
              fontSize={"16px"}
              fontWeight={"400"}
              color={"blackAlpha.800"}
            >
              Pay by card
            </Text>
            <Spacer />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLVIBJ-2rpBUh0gMNNjNhM759BiZ4ZEEC9BQ&usqp=CAU"
              width="5%"
              height="5%"
              mt="22px"
              ml="30px"
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrA_6LJ0DJucgHSZDOYO8v9n7dGNiJ6OPnw&usqp=CAU"
              width="7%"
              height="7%"
              mt="16px"
              ml="0px"
            />
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSapt6bCfFKVEeVMsp5NRz4iOLHcGBqzPtPWw&usqp=CAU"
              width="4%"
              height="4%"
              mt="20px"
              mr="20px"
            />
          </HStack>

          <Box p={"20px 15px 30px 15px"}>
            <Flex direction={"column"}>
              <label
                style={{
                  marginBottom: "-10px",
                  marginLeft: "15px",
                  fontSize: "14px",
                  fontWeight: "700",
                  backgroundColor: "white",
                  zIndex: "4",
                  width: "150px",
                  paddingLeft: "5px",
                }}
              >
                Cardholder Name
              </label>
              <Input
                autoComplete="on"
                w={{ base: "80%", md: "45%", lg: "45%" }}
                size="lg"
                border={"1px solid silver"}
              />
            </Flex>
            <Flex direction={"column"} my={"20px"}>
              <label
                style={{
                  marginBottom: "-10px",
                  marginLeft: "15px",
                  fontSize: "14px",
                  fontWeight: "700",
                  backgroundColor: "white",
                  zIndex: "4",
                  width: "110px",
                  paddingLeft: "5px",
                }}
              >
                Card Number *
              </label>
              <Input
                autoComplete="on"
                w={{ base: "80%", md: "45%", lg: "45%" }}
                size="lg"
                border={"1px solid silver"}
                placeholder="**** **** **** ****"
              />
            </Flex>

            <Flex direction={{ base: "column", md: "row", lg: "row" }}>
              <Flex
                direction={"column"}
                w={{ base: "60%", md: "20%", lg: "20%" }}
              >
                <label
                  style={{
                    marginBottom: "-10px",
                    marginLeft: "15px",
                    fontSize: "14px",
                    fontWeight: "700",
                    backgroundColor: "white",
                    zIndex: "4",
                    width: "95px",
                    paddingLeft: "3px",
                  }}
                >
                  Expiry Date *
                </label>
                <Input
                  w={"100%"}
                  size="lg"
                  border={"1px solid silver"}
                  placeholder="MM / YY"
                />
              </Flex>
              <Flex
                direction={"column"}
                w={{ base: "60%", md: "20%", lg: "20%" }}
                ml={{ base: "0%", md: "5%", lg: "5%" }}
                mt={{ base: "15px", md: "0px", lg: "0px" }}
              >
                <label
                  style={{
                    marginBottom: "-10px",
                    marginLeft: "15px",
                    fontSize: "14px",
                    fontWeight: "700",
                    backgroundColor: "white",
                    zIndex: "4",
                    width: "45px",
                    paddingLeft: "3px",
                  }}
                >
                  CVV *
                </label>
                <Input
                  w={"100%"}
                  size="lg"
                  border={"1px solid silver"}
                  placeholder="1 2 3"
                />
              </Flex>
            </Flex>
          </Box>
        </Box>

        <Box mt={"20px"}>
          <Flex>
            <Checkbox size="md"></Checkbox>
            <Text
              pl={"15px"}
              mt={"45px"}
              align={"left"}
              fontSize={{ base: "14px", md: "16px", lg: "16px" }}
            >
              I agree to Adventour's{" "}
              <span style={{ color: "#008cc9" }}>Terms & Conditions</span> and{" "}
              <span style={{ color: "#008cc9" }}> Privacy Policy;</span> and
              Realistic Journey's{" "}
              <span style={{ color: "#008cc9" }}>
                {" "}
                payment,cancellation and refund conditions,
              </span>{" "}
              as well as{" "}
              <span style={{ color: "#008cc9" }}>
                Credit for Future Tours <br /> Terms & Conditions.
              </span>
            </Text>
          </Flex>
        </Box>

        <Button
          w={"100%"}
          colorScheme="none"
          bg={"black"}
          py={"30px"}
          mt={"30px"}
        >
          Book Now
        </Button>
      </Box>
    </Box>
  );
}

export default PaymentDetails;
