import React, { useState } from 'react';
import { 
  Menu, 
  MenuButton, 
  MenuList, 
  MenuItem, 
  Button,  
  useDisclosure 
} from '@chakra-ui/react';
import { ChevronDownIcon, ChevronUpIcon } from '@chakra-ui/icons';

const OccasionDropdown = () => {
  const [selectedOption, setSelectedOption] = useState("Reserve a Table");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onClose();
  };

  return (
    <Menu isOpen={isOpen}>
      <MenuButton 
        as={Button} 
        rightIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        onClick={isOpen ? onClose : onOpen}
        w="200px"
        h="33px"
        backgroundColor="#F4CE14"
        borderRadius="8px"
        boxShadow="md"
      >
        {selectedOption}
      </MenuButton>
      <MenuList w="400px" p={0} borderRadius="8px" boxShadow="xl" backgroundColor="#F4CE14" border="#1a202c">
        <MenuItem 
            backgroundColor="#F4CE14"
            borderRadius="8px"
            onClick={() => handleOptionClick("Birthday")} 
            _hover={{ bg: "#236967",  borderRadius:"8px", color:"white"}}
        >
          Birthday
        </MenuItem>
        <MenuItem 
            backgroundColor="#F4CE14"
            borderRadius="8px"
            onClick={() => handleOptionClick("Engagement")} 
            _hover={{ bg: "#236967",  borderRadius:"8px", color:"white" }}
        >
          Engagement
        </MenuItem>
        <MenuItem 
            backgroundColor="#F4CE14"
            borderRadius="8px"
            onClick={() => handleOptionClick("Anniversary")} 
            _hover={{ bg: "#236967" , borderRadius:"8px", color:"white"}}
        >
          Anniversary
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default OccasionDropdown;
