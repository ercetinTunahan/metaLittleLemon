import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { ReactComponent as LogoSmall } from '../assets/Logo.svg';

const Footer = () => {
  return (
    <Box bg="gray.800" color="white" py={10}>
      <Flex maxW="1200px" mx="auto" justify="space-between" align="center" px={4}>
      <LogoSmall/>
        <Text>© 2024 Little Lemon. All rights reserved.</Text>
        <Flex>
          <Link mx={2} href="/">Privacy Policy</Link>
          <Link mx={2} href="/">Terms of Service</Link>
          <Link mx={2} href="/">Contact Us</Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
