import React from 'react'
import { Text, Flex, Box, Spacer } from '@chakra-ui/react';

function Price({inc, data}) {
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
            Tour Price Breakdown
            </Text>
            <Flex justifyContent={"space-between"}>
              <Box pb={"14px"}>
                <Text>Base Package Price</Text>
                <Text fontSize={"14px"}>{inc} Traveller x ${inc * data.fees}</Text>
              </Box>
              <Text>${inc * data.fees}</Text>
            </Flex>
            <Flex
              justifyContent={"space-between"}
              pb={"15px"}
              borderBottom={"1px solid silver"}
            >
              <Text>Discount</Text>
              <Text>- ${inc * data.fees * 10/100} </Text>
            </Flex>
            <Flex justifyContent={"space-between"} pt={"20px"}>
              <Text fontWeight={"700"}>Travel Total</Text>
              <Text fontSize={"20px"} fontWeight={"700"}>
                ${inc * data.fees*90/100}
              </Text>
            </Flex>
          </Box>
        );
      }

export default Price
