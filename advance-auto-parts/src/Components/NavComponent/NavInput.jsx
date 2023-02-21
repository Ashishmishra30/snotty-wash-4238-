import React from 'react'
import { Stack,InputGroup,InputLeftElement,InputRightElement,Input,IconButton } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';


 const NavInput = () => {
  return (
    <Stack spacing={7}>
    <InputGroup w="650px" h="100px">
      <InputLeftElement
       
      />
      <Input placeholder='What part do you need today?' h="70px"/>
      <InputRightElement children={<IconButton bg="tomato" h="90px" aria-label='Search database' icon={<SearchIcon w="40px"  />} />} />
    </InputGroup>
  </Stack>
  )
  
 }

 export default NavInput;
