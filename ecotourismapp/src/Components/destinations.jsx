import React, { useEffect, useState } from "react";
import { Box, Center, Flex, Heading } from "@chakra-ui/react";
import axios, { Axios } from "axios";
import { DestinationsCard } from "./DestinationsCard";
export const Destinations = () => {
  const bg__color = "green.100";
  const [data, setData] = useState([]);

  const getData = () => async () => {
    try {
      console.log("trying");
      let URL = `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}`;
      let res = await axios.get(`http://localhost:8080/destinations?_limit=100`);
      console.log(res.data);
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const res = useEffect(() => {
    return getData();
  }, []);

  return (<Box bgColor={"green.100"} color={"white"} p={3} >
  <Heading gap={3}>Destinatons</Heading>
    <Flex  wrap={"wrap"} justifyContent={"Center"} gap={3}>
      {data?.map((e) => {
        return <DestinationsCard key={e.id} prop={e} />;
      })}
    </Flex>
      </Box>
  );
};
