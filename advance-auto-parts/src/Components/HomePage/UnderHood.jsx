import { Box, Image, Text,Flex } from '@chakra-ui/react';
import React from 'react'

const UnderHood = () => {
    return (
        <Box bg="white" p={10}>
            <Flex gap={3} borderBottom="4px solid gray" mb={10}>
                <Text color="black.700" borderBottom="4px solid yellow" fontWeight="bold" fontSize="5xl">Under</Text>
                <Text color="black.700" fontWeight="bold" fontSize="5xl">The</Text>
                <Text color="black.700" fontSize="5xl">Hood Savings</Text>
            </Flex>
            <Box display="grid" gridTemplateColumns="repeat(4,1fr)" gap={6}>
                <Box  className='top-products'>
                    <Image w={250} h={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgf1tt-9hpP_769KR7QgIFYrF1T2X3XIhjvg&usqp=CAU" />
                    <Text>FRAM Oil Change Bundles</Text>
                    <Text>Starting at $25.99. Add a FRAM Drive Air or Cabin Air Filter: $8.</Text>
                </Box>
                <Box  className='top-products'>
                    <Image w={250} h={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0YcInyMjdDbKkaRuNuXeTB-_bg-jT3xkHFw&usqp=CAU" />
                    <Text>Hot Deal: 2 For $11</Text>
                    <Text>Increase your miles per gallon with Lucas Fuel Treatment.</Text>
                </Box>
                <Box  className='top-products'>
                    <Image w={250} h={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKUaRJOCEnol9yKTBQCrCYz9YdQy-3s9WxttFPPnh4FL4hs-MT-sn7cvn-HvEvuMxEvg4&usqp=CAU" />
                    <Text>2 For $12</Text>
                    <Text>Spring Cleaning. Mix & Match.</Text>
                </Box>
                <Box  className='top-products'>
                    <Image w={250} h={250} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpEgCPbSWSZPnINn_nLFSfpLwUdmmT4JdSMg&usqp=CAU" />
                    <Text>ACDelco: $32 Gift Card</Text>
                    <Text>By mail when you buy 8 ACDelco Professional Iridium Spark Plugs.</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default UnderHood;
