import { Box, Flex, Image,Text } from '@chakra-ui/react';
import React from 'react';
import { useState, useEffect } from 'react';
import "./HomePage.css"

const TopSeller = () => {
    const [data, setData] = useState([]);

    const getData = () => {
        fetch(`http://localhost:3004/products?_page=2&_limit=4`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        getData();
    }, []);

   const Cards =()=>{
        return (
            <Box ml={5} mb={10} >
                <Flex gap={5}>
                       <Image className="cards" src="https://i.postimg.cc/prW5hWVm/Auto-3.png"/>
                       <Image className="cards" src="https://i.postimg.cc/W1BDm6bL/Auto-4.png" />
                </Flex>
                <Box bg="white" w={60} h={10}>

                </Box>
            </Box>
        )
    }

    return (
        <Box bg="white">
            <Box  p={10}>
            <Flex gap={3} borderBottom="4px solid gray" mb={10}>
                <Text color="black.700" borderBottom="4px solid yellow" fontWeight="bold" fontSize="5xl">Top</Text>
                <Text color="black.700" fontSize="5xl">Sellers</Text>
            </Flex>
            </Box>
            <Flex >
                {
                    data.map((el) => (
                        <Flex className='top-products'>
                            <Box>
                                <Image w={100} src={el.image}/>
                            </Box>
                            <Box>
                                <Text  fontWeight="bold" fontSize="lg" color="tomato" >${el.price}</Text>
                                <Text>Ratings :{el.ratings}</Text>
                                <Text fontWeight="bold" fontSize="lg" color="black.700">{el.category}</Text>
                                <Text>{el.name}</Text>
                            </Box>
                        </Flex>
                    ))
                }
            </Flex>
            <Box ml="30px" mt={10} mb={10} className='image-hover'>
            <Image src="https://i.postimg.cc/DzZrDzd7/Auto-2.png"/>
            </Box>
            <Cards/>
        </Box>
    )
}


export default TopSeller;