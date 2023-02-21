import React from 'react';
import { Box, Flex } from '@chakra-ui/react'
import NavInput from './NavComponent/NavInput';

 const Navbar = () => {
  return (
    <>
    <Box w="100%">
      <Flex>
        <img style={{width:"150px",height:"70px"}} src="https://i.postimg.cc/43ycxZxH/AutoMads.png" />
     <NavInput/>
      </Flex>
    </Box>
    </>
  )
}

export default Navbar;
