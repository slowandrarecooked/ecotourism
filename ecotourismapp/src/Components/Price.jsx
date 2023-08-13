import React from 'react'
import { Text, Flex, Box, Spacer } from '@chakra-ui/react';

function Price() {
  return (
          <Box
            p={"20px"}
            my={"25px"}
            borderRadius={"15px"}
            bg={"white"}
            boxShadow={"md"}
            position={"sticky"}
            top={"20px"}
          >
            <Text pb={"20px"} fontSize={"20px"} fontWeight={"700"}>
              Price Breakdown
            </Text>
            <Flex justifyContent={"space-between"}>
              <Box pb={"14px"}>
                <Text>Base price</Text>
                <Text fontSize={"14px"}>Traveller x ₹</Text>
              </Box>
              <Text>₹ </Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              pb={"15px"}
              borderBottom={"1px solid silver"}
            >
              <Text>Discount</Text>
              <Text>- ₹ </Text>
            </Flex>
            <Flex justifyContent={"space-between"} pt={"20px"}>
              <Text fontWeight={"700"}>Total due</Text>
              <Text fontSize={"20px"} fontWeight={"700"}>
                ₹{" "}
              </Text>
            </Flex>
            <Flex
              lineHeight={"45px"}
              direction={"column"}
              mt={"10px"}
              p={"5px"}
              bg={"gray.100"}
              borderRadius={"10px"}
            >
              <Flex>
                <Text fontWeight={"700"}>Due today</Text>
                <Spacer />
                <Text fontWeight={"700"}>₹ </Text>
              </Flex>
              <Flex>
                <Text>Due on 1 Jul, 2023</Text>
                <Spacer />
                <Text>₹ </Text>
              </Flex>
            </Flex>
          </Box>
        );
      }

export default Price
