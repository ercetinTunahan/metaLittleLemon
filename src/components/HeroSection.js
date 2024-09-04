import { Box, Heading, Text,Stack, Image } from '@chakra-ui/react';
import OccasionDropdown from "./OccasionDropdown"

const HeroSection = () => {
  return (
    <Box height={400} backgroundColor="#495e57"  marginBottom={40} >
      <Box maxW="1440px" mx="auto" py={10} px={4} p={20} display="flex" justifyContent="space-between">
          <Box>
          <Heading color="#F4CE14" fontSize="4xl">Little Lemon</Heading>
          <Heading color="white" fontSize="xl">Discover the flavors of Italy right here.</Heading>
          <Text color="white" mt={6} mb={6}>We are a family owned<br/>Mediterranean restaurant,<br/>focused on traditional<br/> recipes served with a modern <br/> twist </Text>
          <OccasionDropdown />
        </Box>
        <Box>
        <Stack direction='row'>
          <Image borderRadius={20} boxSize='400px' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
          </Stack>
        </Box>
      </Box>
     
    </Box>
  );
};

export default HeroSection;
