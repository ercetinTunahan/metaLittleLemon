import { Box, Flex, HStack, Link, IconButton } from '@chakra-ui/react';
import { ReactComponent as Logo } from '../assets/Logo.svg';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-around">
        <Logo/>
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
          <Link href="/" fontWeight="bold" color="black">Home</Link>
          <Link href="/about" fontWeight="bold" color="black">About</Link>
          <Link href="/menu" fontWeight="bold" color="black">Online Menu</Link>
          <Link href="/book-table" fontWeight="bold" color="black">Book a Table</Link>
          <Link href="/contact" fontWeight="bold" color="black">Contact</Link>
        </HStack>
        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Toggle Navigation"
          display={{ md: 'none' }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Flex>
    </Box>
  );
};

export default Navbar;
