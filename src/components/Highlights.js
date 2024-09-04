import React from 'react';
import { Box, Text, Image, Button, Flex, Grid } from '@chakra-ui/react';

const Specials = () => {
  return (
    <Box maxW="1440px" mx="auto" py={10} px={4}>
      <Flex  justify="space-between" align="center" mb={8}>
        <Text fontSize="4xl" fontWeight="bold">
          Specials
        </Text>
        <Button bg="black" color="white" size="lg">
          Online Menu
        </Button>
      </Flex>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {/* Greek Salad */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="lg">
          <Image
            src="path-to-greek-salad-image.jpg"
            alt="Greek Salad"
            objectFit="cover"
            borderRadius="md"
            mb={4}
          />
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="xl" fontWeight="bold">Greek Salad</Text>
            <Text fontSize="lg" color="red.500">$12.99</Text>
          </Flex>
          <Text mb={4}>
            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
          </Text>
          <Button variant="link" colorScheme="blackAlpha">Order a delivery</Button>
        </Box>

        {/* Bruschetta */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="lg">
          <Image
            src="path-to-bruschetta-image.jpg"
            alt="Bruschetta"
            objectFit="cover"
            borderRadius="md"
            mb={4}
          />
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="xl" fontWeight="bold">Bruschetta</Text>
            <Text fontSize="lg" color="red.500">$5.99</Text>
          </Flex>
          <Text mb={4}>
            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
          </Text>
          <Button variant="link" colorScheme="blackAlpha">Order a delivery</Button>
        </Box>

        {/* Lemon Dessert */}
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={4} boxShadow="lg">
          <Image
            src="path-to-lemon-dessert-image.jpg"
            alt="Lemon Dessert"
            objectFit="cover"
            borderRadius="md"
            mb={4}
          />
          <Flex justify="space-between" align="center" mb={2}>
            <Text fontSize="xl" fontWeight="bold">Lemon Dessert</Text>
            <Text fontSize="lg" color="red.500">$5.00</Text>
          </Flex>
          <Text mb={4}>
            This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
          </Text>
          <Button variant="link" colorScheme="blackAlpha">Order a delivery</Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Specials;