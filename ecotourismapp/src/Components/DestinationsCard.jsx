import { StarIcon } from "@chakra-ui/icons";
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
import { Link } from "react-router-dom";
import React from "react";
import { Navigate } from "react-router-dom";
import { ProductDetails } from "./ProductDetails";

export const DestinationsCard = ({ prop, Loading }) => {
  console.log(prop);
  let { id, image_url, fees, grade, destination_title, location, description } =
    prop;
  let Ratings = "";

  const star = new Array(5);
  for (let i = 1; i <= 5; i++) {
    if (i <= grade) {
      star[i] = 1;
    } else {
      star[i] = 0;
    }
  }
  let { loading } = Loading;
  return (
    <Card maxW="sm" m={2} bg={"green.50"} boxShadow="xl" height={"500px"}>
      <CardBody>
        <Box height={"150px"} width={"350px"} position={"relative"}>
          <center position="absolute" top={0} left={0}>
            {image_url ? (
              <Image
                src={image_url}
                boxSize="350px 200px "
                borderRadius="xl"
                objectFit="cover"
                opacity="1"
                zIndex={2}
                backgroundColor={"black"}
              />
            ) : (
              <Skeleton
                height="100%"
                width={"100%"}
                position={"absolute"}
                top={0}
                left={0}
                opacity={0.7}
                zIndex={1}
                bg="gray.100"
              ></Skeleton>
            )}
          </center>
        </Box>

        <Box height={"150px"}>
          <Stack mt="2">
            <p size="md">
              <i className="fa-solid fa-location-dot"></i> {destination_title}
            </p>
            <Heading as={"h6"} fontSize={"2xl"}>
              {location}
            </Heading>
            <Box height="70px" className="content-box">
              <Text>{description}</Text>
            </Box>
          </Stack>
        </Box>
        <Text color="blue.600" fontSize="2xl">
          Price:- ${fees}
        </Text>
        <Text color="blue.600" fontSize="2xl">
          Ratings:-{" "}
          {star.map((e) => {
            if (e == 1) {
              return <StarIcon color={"yellow"}></StarIcon>;
            } else {
              return <StarIcon></StarIcon>;
            }
          })}
        </Text>
        <CardFooter justifyContent={"space-around"}>
          <Button colorScheme="yellow">
            <Link to={`/destination/${id}`}>Book Now</Link>
          </Button>
        </CardFooter>
      </CardBody>
    </Card>
  );
};
