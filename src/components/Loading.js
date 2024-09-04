import { Box, Text,CircularProgress } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      bg="gray.100"
    >
        <CircularProgress isIndeterminate color='lightskyblue' />
      <Text mt={4} color="gray.600" fontSize="lg">
        Loading...
      </Text>
    </Box>
  );
};

export default Loading;
