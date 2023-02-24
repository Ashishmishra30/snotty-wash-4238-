import './HomePage.css';
import { Box, Flex, Text, Button, Image, Input, Grid } from '@chakra-ui/react';
import { FaCar } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { useState } from 'react';

const HomePage = () => {
    const [redirect, setRedirect] = useState(false);

    function handleClick() {
        setRedirect(true);
    }

    return (
        <div>
            <Flex mt={5} width="98%" ml={5} >
                <Box bg="white" borderTopLeftRadius="50px" pl={5}>
                    <Text fontSize={40} mt={85} fontWeight="bold" >Save 15% Instantly</Text>
                    <Text fontSize={20} fontWeight="bold">When you buy any set of Carquest Brake Pads and 2 Carquest Brake Rotors.</Text>
                    {redirect && <Navigate to="/products" />}
                    <Link to="/products">
                        <Button mt={8} colorScheme="orange" onClick={handleClick}>Shop Now</Button>
                    </Link>
                </Box>
                <Image src="https://shop.advanceautoparts.com/wcsstore/CVWEB/Attachment/staticbusinesscontent/image/2023/02/home-brakes-hero.png" />
            </Flex>
            <Flex mt={5} width="98%" ml={5} justify='space-evenly'>
                <Box bg="white" borderTopLeftRadius="30px" pl={5} mr={5} className="HomeBox">
                    <Text fontSize={20} fontWeight="bold" leftIcon={<FaCar />}>Mobil 1 Oil Change Bundles</Text>
                    <Text fontSize={15}>Full Syn starting at $39.99 + FREE drain pan & funnel*. Add for $3 more.</Text>
                </Box>
                <Box bg="white" borderTopLeftRadius="30px" pl={5} mr={5} className="HomeBox">
                    <Text fontSize={20} fontWeight="bold" >Win* Free Gas For A Year</Text>
                    <Text fontSize={15}>Enter for your chance to win February 2 - March 31, 2023. *See Details.</Text>
                </Box>
                <Box bg="white" borderTopLeftRadius="30px" pl={5} className="HomeBox">
                    <Text fontSize={20} fontWeight="bold" >Save $8 Instantly</Text>
                    <Text fontSize={15}>On 2 Rain-X Latitude Water Repellency Enhanced Performance Wiper Blades.</Text>
                </Box>
            </Flex>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} bg="yellow" alignItems="center" mt={5} >
                <Image w={40} h={20} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5y2L8XzX8kIDiFo0Msd5FKimh16K5ojvFRzjUZZ-UJg&usqp=CAU&ec=48600112" />
                <Text fontSize={20} fontWeight="bold">It all starts here</Text>
                <Input mr={5} bg="white" placeholder="Enter Year Make Model Engine" />
                <Input mr={5} bg="white" placeholder="Enter License Plate" />
                <Input bg="white" placeholder="Enter VIN" />
            </Grid>
        </div>
    )
}

export default HomePage;
