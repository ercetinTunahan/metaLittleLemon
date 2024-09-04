import React from 'react';
import { Box, Heading, Text, VStack, Input, Button } from '@chakra-ui/react';

const BookTablePage = () => {
  return (
    <Box p={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="xl">Book a Table</Heading>
        <Text>Please fill in the details below to reserve a table.</Text>
        <Input placeholder="Full Name" />
        <Input placeholder="Email Address" />
        <Input placeholder="Phone Number" />
        <Input placeholder="Number of Guests" />
        <Input type="date" placeholder="Reservation Date" />
        <Input type="time" placeholder="Reservation Time" />
        <Button colorScheme="teal" size="lg">Reserve Now</Button>
      </VStack>
    </Box>
  );
};

export default BookTablePage;
