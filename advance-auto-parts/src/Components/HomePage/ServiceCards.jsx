import { Box,Text } from '@chakra-ui/react';
import React from 'react';
import "./HomePage.css";
 
const ServiceCards = () => {
  return (
    <Box display="grid" gridTemplateColumns="repeat(6,1fr)" bg="white" gap={6}  >
        <Box className='serviceCards'>
            <Text fontWeight="bold" fontSize="2xl" color="#fccb00">Free In Store Services</Text>
            <Text>Personalized care including battery testing and installation, oil recycling, wiper installation and more!</Text>
        </Box>
        <Box className='serviceCards'>
            <Text fontWeight="bold" fontSize="2xl" color="#fccb00">Advance Same Day</Text>
            <Text>Free in store or curbside pickup. Plus delivery available in select markets.</Text>
        </Box>
        <Box className='serviceCards'>
            <Text fontWeight="bold" fontSize="2xl" color="#fccb00">Speed Perks</Text>
            <Text>Get points for every purchase. Redeem points for rewards.</Text>
        </Box>
        <Box className='serviceCards'>
            <Text fontWeight="bold" fontSize="2xl" color="#fccb00">Hiring Now: In Store & Corporate</Text>
            <Text>Be seen, heard & valued. Careers start & thrive here. Apply now.</Text>
        </Box>
        <Box className='serviceCards'>
            <Text fontWeight="bold" fontSize="2xl" color="#fccb00">Rebates and Sweepstakes</Text>
            <Text>Find out about rebate and sweepstake offers, submit your rebate online and more!</Text>
        </Box>
        <Box className='serviceCards'>
            <Text fontWeight="bold" fontSize="2xl" color="#fccb00">Need a Certified Technician?</Text>
            <Text>We have approved professionals to repair any problem you have.</Text>
        </Box>
    </Box>
  )
}

export default ServiceCards;
