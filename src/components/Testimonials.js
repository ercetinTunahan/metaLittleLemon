import { Box, Grid, Text, GridItem, Flex,Image } from '@chakra-ui/react';

const testimonials = [
  { name: "John Doe", review: "Fantastic food and wonderful service!", image: "https://bit.ly/dan-abramov" },
  { name: "Jane Smith", review: "A taste of Italy in every bite.", image: "https://bit.ly/dan-abramov" },
  { name: "Michael Johnson", review: "My favorite restaurant in town.", image: "https://bit.ly/dan-abramov" },
];

const TestimonialsSection = () => {
  return (
    <Box maxW="1440px" mx="auto" py={10} px={4}>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center" mb={8}>
        Testimonials
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        
          {testimonials.map((testimonial, index) => (
            <GridItem> 
            <Box key={index} borderWidth="1px" borderRadius="lg" overflow="hidden" p={6} boxShadow="lg">
              <Flex align="center" mb={4}>
                <Image
                  src={testimonial.image}
                  alt="User 1"
                  boxSize="50px"
                  borderRadius="full"
                  mr={4}
                />
                <Text fontSize="lg" fontWeight="bold">{testimonial.name}</Text>
              </Flex>
              <Text>
                {testimonial.review}
              </Text>
            </Box>
          </GridItem>
          ))}
      </Grid>
    </Box>
  );
};

export default TestimonialsSection;
