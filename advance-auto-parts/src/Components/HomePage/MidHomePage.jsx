import { Box,Flex,Text,Image} from '@chakra-ui/react';
import { useState,useEffect } from 'react';
import React from 'react';
import './HomePage.css';

const MidHomePage = () => {
    const [data,setData] = useState([]);

    const getData = () =>{
        fetch(`http://localhost:3004/products?_page=1&_limit=5`)
        .then((res)=>res.json())
        .then((data) =>setData(data))
    }
    
    useEffect(()=>{
        getData();
    },[]);


  return (
   <Box bg="white" p={10}>
    <Flex gap={3} borderBottom="4px solid gray">
    <Text color="black.700" borderBottom="4px solid yellow" fontWeight="bold" fontSize="5xl">Top</Text>
    <Text color="black.700" fontSize="5xl">Category</Text>
    </Flex>
    <Box display="grid" gridTemplateColumns="repeat(5,1fr)" mt={10} >
        {
            data.map((el)=>(
                <Box className='top-products'  key={el.id} p={5} borderTopLeftRadius="30px" >
                    <Image width={180} src={el.image}/>
                    <Text mt={8} textAlign="center" fontWeight="bold" fontSize="md">{el.category}</Text>
                </Box>
            ))
        }
    </Box>
   </Box>
  )
}

export default MidHomePage;