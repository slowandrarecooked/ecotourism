import React from "react";
import { BsFill2SquareFill, BsFillInfoCircleFill } from "react-icons/bs";
import {
  HStack,
  Radio,
  RadioGroup,
  VStack,
  FormControl,
  Select,
  FormLabel,
  Box,
  Text,
  Input
} from "@chakra-ui/react";

function TravellerDetails() {
  return (
    <Box p={"20px"} bg={"white"} boxShadow={"md"} borderRadius={"15px"}>
      <HStack>
        <BsFill2SquareFill size={"30px"} />
        <Text px={"10px"} fontWeight={"700"} fontSize={"20px"}>
          Add traveller details
        </Text>
      </HStack>
      <HStack
        ml={"8px"}
        borderRadius={"15px"}
        p={"20px"}
        bg={"gray.200"}
        my={"25px"}
      >
        <BsFillInfoCircleFill size={"25px"} />
        <HStack
          px={"10px"}
          fontWeight={{ base: "500", md: "700", lg: "700" }}
          fontSize={{ base: "14px", md: "16", lg: "16" }}
        >
          <Text>Please Note:</Text>
          <Text textAlign="left">
            Ensure your traveler details align with your passport information.
          </Text>
        </HStack>
      </HStack>
      <RadioGroup py={"35px"}>
        <HStack>
          <Text fontWeight={"700"} fontSize={"14px"} px={"10px"}>
            Title*
          </Text>
          <Radio value="Mr.">Mr.</Radio>
          <Radio value="Ms.">Ms.</Radio>
          <Radio value="Mrs.">Mrs.</Radio>
          <Radio value="Miss">Miss</Radio>
        </HStack>
      </RadioGroup>
      <FormControl ml={"13px"}>
        <VStack align={"left"}>
          <FormLabel
            mb={"-19px"}
            ml={"15px"}
            fontSize={"14px"}
            fontWeight={"700"}
            bg={"white"}
            zIndex="4"
            w="90px"
            pl="6px"
          >
            First Name*
          </FormLabel>
          <Input
            autoComplete="on"
            w={{ base: "80%", md: "45%", lg: "45%" }}
            size={"lg"}
            border={"1px solid silver"}
            type="text"
          />
        </VStack>

        <VStack align={"left"} my={"20px"}>
          <FormLabel
            mb={"-19px"}
            ml={"15px"}
            fontSize={"14px"}
            fontWeight={"700"}
            bg={"white"}
            zIndex="4"
            w="90px"
            pl="6px"
          >
            Last Name*
          </FormLabel>
          <Input
            autoComplete="on"
            w={{ base: "80%", md: "45%", lg: "45%" }}
            size={"lg"}
            border={"1px solid silver"}
            type="text"
          />
        </VStack>

        <VStack align={"left"}>
          <FormLabel
            mb={"-19px"}
            ml={"15px"}
            fontSize={"14px"}
            fontWeight={"700"}
            bg={"white"}
            zIndex="4"
            w="55px"
            pl="6px"
          >
            Email*
          </FormLabel>
          <Input
            autoComplete="on"
            w={{ base: "80%", md: "45%", lg: "45%" }}
            size={"lg"}
            border={"1px solid silver"}
            type="email"
          />
        </VStack>

        <VStack align={"left"} my={"20px"}>
          <FormLabel
            mb={"-19px"}
            ml={"15px"}
            fontSize={"14px"}
            fontWeight={"700"}
            bg={"white"}
            zIndex="4"
            w="115px"
            pl="6px"
          >
            Phone Number*
          </FormLabel>
          <Input
            autoComplete="on"
            w={{ base: "80%", md: "45%", lg: "45%" }}
            size={"lg"}
            border={"1px solid silver"}
            type="tel"
            placeholder="e.g. +91 9778556788"
          />
        </VStack>

        <Text fontWeight={"700"} mb={"15px"} fontSize={"16px"} align={"left"}>
          Date of Birth*
        </Text>
        <HStack>
          <Box position={"relative"}>
            <FormLabel
              pos="absolute"
              top="-10px"
              ml="14px"
              fontSize="14px"
              fontWeight="700"
              bg="white"
              zIndex="4"
              w="35px"
              pl="6px"
            >
              Day
            </FormLabel>
            <Select size={"lg"} w={"80px"} border={"1px solid silver"}>
              <option value="" style={{ backgroundColor: "white" }}>
                {" "}
              </option>
              <option value="01" style={{ backgroundColor: "white" }}>
                01
              </option>
              <option value="02" style={{ backgroundColor: "white" }}>
                02
              </option>
              <option value="03" style={{ backgroundColor: "white" }}>
                03
              </option>
              <option value="04" style={{ backgroundColor: "white" }}>
                04
              </option>
              <option value="05" style={{ backgroundColor: "white" }}>
                05
              </option>
              <option value="06" style={{ backgroundColor: "white" }}>
                06
              </option>
              <option value="07" style={{ backgroundColor: "white" }}>
                07
              </option>
              <option value="08" style={{ backgroundColor: "white" }}>
                08
              </option>
              <option value="09" style={{ backgroundColor: "white" }}>
                09
              </option>
              <option value="10" style={{ backgroundColor: "white" }}>
                10
              </option>
              <option value="11" style={{ backgroundColor: "white" }}>
                11
              </option>
              <option value="12" style={{ backgroundColor: "white" }}>
                12
              </option>
              <option value="13" style={{ backgroundColor: "white" }}>
                13
              </option>
              <option value="14" style={{ backgroundColor: "white" }}>
                14
              </option>
              <option value="15" style={{ backgroundColor: "white" }}>
                15
              </option>
              <option value="16" style={{ backgroundColor: "white" }}>
                16
              </option>
              <option value="17" style={{ backgroundColor: "white" }}>
                17
              </option>
              <option value="18" style={{ backgroundColor: "white" }}>
                18
              </option>
              <option value="19" style={{ backgroundColor: "white" }}>
                19
              </option>
              <option value="20" style={{ backgroundColor: "white" }}>
                20
              </option>
              <option value="21" style={{ backgroundColor: "white" }}>
                21
              </option>
              <option value="22" style={{ backgroundColor: "white" }}>
                22
              </option>
              <option value="23" style={{ backgroundColor: "white" }}>
                23
              </option>
              <option value="24" style={{ backgroundColor: "white" }}>
                24
              </option>
              <option value="25" style={{ backgroundColor: "white" }}>
                25
              </option>
              <option value="26" style={{ backgroundColor: "white" }}>
                26
              </option>
              <option value="27" style={{ backgroundColor: "white" }}>
                27
              </option>
              <option value="28" style={{ backgroundColor: "white" }}>
                28
              </option>
              <option value="29" style={{ backgroundColor: "white" }}>
                29
              </option>
              <option value="30" style={{ backgroundColor: "white" }}>
                30
              </option>
              <option value="31" style={{ backgroundColor: "white" }}>
                31
              </option>
            </Select>
          </Box>
          <Box position={"relative"}>
            <label
              style={{
                position: "absolute",
                top: "-9px",
                marginLeft: "-55px",
                fontSize: "14px",
                fontWeight: "700",
                backgroundColor: "white",
                zIndex: "4",
                width: "58px",
                paddingLeft: "6px",
              }}
            >
              Month
            </label>
            <Select
              bg={"white"}
              size={"lg"}
              w={{ base: "100px", md: "145px", lg: "145px" }}
              border={"1px solid silver"}
            >
              <option value="00" style={{ backgroundColor: "white" }}>
                {" "}
              </option>
              <option value="01" style={{ backgroundColor: "white" }}>
                January
              </option>
              <option value="02" style={{ backgroundColor: "white" }}>
                February
              </option>
              <option value="03" style={{ backgroundColor: "white" }}>
                March
              </option>
              <option value="04" style={{ backgroundColor: "white" }}>
                April
              </option>
              <option value="05" style={{ backgroundColor: "white" }}>
                May
              </option>
              <option value="06" style={{ backgroundColor: "white" }}>
                June
              </option>
              <option value="07" style={{ backgroundColor: "white" }}>
                July
              </option>
              <option value="08" style={{ backgroundColor: "white" }}>
                August
              </option>
              <option value="09" style={{ backgroundColor: "white" }}>
                September
              </option>
              <option value="10" style={{ backgroundColor: "white" }}>
                October
              </option>
              <option value="11" style={{ backgroundColor: "white" }}>
                November
              </option>
              <option value="12" style={{ backgroundColor: "white" }}>
                December
              </option>
            </Select>
          </Box>

          <Box position={"relative"}>
            <label
              style={{
                position: "absolute",
                top: "-9px",
                marginLeft: "-26px",
                fontSize: "14px",
                fontWeight: "700",
                backgroundColor: "white",
                zIndex: "4",
                width: "40px",
                paddingLeft: "6px",
              }}
            >
              Year
            </label>
            <Select size={"lg"} w={"80px"} border={"1px solid silver"}>
              <option value="" style={{ backgroundColor: "white" }}></option>
              <option value="1988" style={{ backgroundColor: "white" }}>
                1988
              </option>
              <option value="1989" style={{ backgroundColor: "white" }}>
                1989
              </option>
              <option value="1990" style={{ backgroundColor: "white" }}>
                1990
              </option>
              <option value="1991" style={{ backgroundColor: "white" }}>
                1991
              </option>
              <option value="1992" style={{ backgroundColor: "white" }}>
                1992
              </option>
              <option value="1993" style={{ backgroundColor: "white" }}>
                1993
              </option>
              <option value="1994" style={{ backgroundColor: "white" }}>
                1994
              </option>
              <option value="1995" style={{ backgroundColor: "white" }}>
                1995
              </option>
              <option value="1996" style={{ backgroundColor: "white" }}>
                1996
              </option>
              <option value="1997" style={{ backgroundColor: "white" }}>
                1997
              </option>
              <option value="1998" style={{ backgroundColor: "white" }}>
                1998
              </option>
              <option value="1999" style={{ backgroundColor: "white" }}>
                1999
              </option>
              <option value="2000" style={{ backgroundColor: "white" }}>
                2000
              </option>
              <option value="2001" style={{ backgroundColor: "white" }}>
                2001
              </option>
              <option value="2002" style={{ backgroundColor: "white" }}>
                2002
              </option>
              <option value="2003" style={{ backgroundColor: "white" }}>
                2003
              </option>
              <option value="2004" style={{ backgroundColor: "white" }}>
                2004
              </option>
              <option value="2005" style={{ backgroundColor: "white" }}>
                2005
              </option>
              <option value="2006" style={{ backgroundColor: "white" }}>
                2006
              </option>
              <option value="2007" style={{ backgroundColor: "white" }}>
                2007
              </option>
              <option value="2008" style={{ backgroundColor: "white" }}>
                2008
              </option>
              <option value="2009" style={{ backgroundColor: "white" }}>
                2009
              </option>
              <option value="2010" style={{ backgroundColor: "white" }}>
                2010
              </option>
            </Select>
          </Box>
        </HStack>

        <RadioGroup py={"35px"} isRequired>
          <HStack>
            <Text fontWeight={"700"} fontSize={"15px"} px={"10px"}>
              Gender*
            </Text>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
          </HStack>
        </RadioGroup>
        <Box position={"relative"}>
          <label
            style={{
              position: "absolute",
              top: "-9px",
              marginLeft: "-290px",
              fontSize: "14px",
              fontWeight: "700",
              backgroundColor: "white",
              zIndex: "4",
              width: "90px",
              paddingLeft: "6px",
            }}
          >
            Nationality*
          </label>
          <Select w={"45%"} size={"lg"} border={"1px solid silver"}>
            <option value="" style={{ backgroundColor: "white" }}></option>
            <option value="India" style={{ backgroundColor: "white" }}>
              India
            </option>
            <option value="Russia" style={{ backgroundColor: "white" }}>
              Russia
            </option>
            <option value="Nepal" style={{ backgroundColor: "white" }}>
              Nepal
            </option>
            <option value="Sri_lanka" style={{ backgroundColor: "white" }}>
              Sri lanka
            </option>
            <option value="Bhutan" style={{ backgroundColor: "white" }}>
              Bhutan
            </option>
            <option value="France" style={{ backgroundColor: "white" }}>
              France
            </option>
            <option value="USA" style={{ backgroundColor: "white" }}>
              USA
            </option>
            <option value="Germany" style={{ backgroundColor: "white" }}>
              Germany
            </option>
          </Select>
        </Box>
      </FormControl>
    </Box>
  );
}

export default TravellerDetails;
