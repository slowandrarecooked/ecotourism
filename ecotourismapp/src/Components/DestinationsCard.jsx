import {
  Flex,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Wrap,
  Center,
  Text,
  Square,
  Box,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Card,
  Skeleton,
} from "@chakra-ui/react";

import React from "react";

export const DestinationsCard = ({ prop }) => {
  let { image_url, fees, grade, destination_title, location, description } =
    prop;

  return (
    <Card maxW="sm" m={2} bg={"green.50"}>
      <CardBody>
        {image_url?<Image src={image_url} borderRadius="lg" />:<Skeleton height='500px' />}
        
        <Stack mt="6" spacing="3">
          <Heading as={"h6"} size="md" >
            <i class="fa-solid fa-location-dot"></i> {destination_title}
          </Heading>
          <Heading as={"h5"} >
            {location}
          </Heading>
          <Text>{description}</Text>

          <Text color="blue.600" fontSize="2xl">
            Price:-
            {fees}
          </Text>
          <CardFooter Footer justifyContent={"Center"}>
            <Button  colorScheme="yellow">
              Book Now
            </Button>
          </CardFooter>
        </Stack>
      </CardBody>
    </Card>
  );
};
