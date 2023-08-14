import React, { useEffect, useState } from 'react';
import { Box, Heading, Text, Button, Icon } from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa'; // Import the React Icons library
import { motion } from 'framer-motion';

const Success = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    const animationTimeout = setTimeout(() => {
      setAnimationComplete(true);
    }, 500);

    return () => clearTimeout(animationTimeout);
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
      backgroundColor="#f5f5f5"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={animationComplete ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <Box
          p="20px"
          bg="white"
          borderRadius="10px"
          boxShadow="0 2px 6px rgba(0, 0, 0, 0.1)"
          textAlign="center"
        >
          <Icon as={FaCheckCircle} color="green.500" boxSize={10} mb={4} />
          <Heading as="h2" size="lg" mb={4}>
            Payment Successful!
          </Heading>
          <Text fontSize="md">
          Your payment has been processed successfully. Get ready for an unforgettable adventure!
          </Text>
          <Button
            mt={6}
            colorScheme="teal"
            size="md"
            onClick={() => {
              // Implement your logic to navigate back to the home page here
            }}
          >
            Back to Home
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Success;
