import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';

const About = () => {
  return (
    <Box maxW="1440px" mx="auto" py={10} px={4}>
      <Flex direction={{ base: 'column', md: 'row' }} align="center" justify="space-between">
        {/* Text Section */}
        <Box maxW="50%" p={5}>
          <Text fontSize="4xl" fontWeight="bold" mb={4}>
            Little Lemon
          </Text>
          <Text fontSize="2xl" color="gray.500" mb={4}>
            Chicago
          </Text>
          <Text fontSize="lg" color="gray.700">
            Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. Located in the heart of Chicago, we have been proudly serving our community since 1995.
          </Text>
        </Box>

        {/* Images Section */}
        <Flex maxW="50%" p={5} direction="column" gap={4}>
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Little Lemon Restaurant Interior"
            borderRadius="md"
            boxShadow="lg"
            objectFit="cover"
          />
          <Image
            src="https://bit.ly/dan-abramov"
            alt="Little Lemon Restaurant Dish"
            borderRadius="md"
            boxShadow="lg"
            objectFit="cover"
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
