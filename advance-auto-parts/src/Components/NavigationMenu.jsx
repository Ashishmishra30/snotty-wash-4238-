import { Flex, Box, Link, Text, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {FaBars} from "react-icons/fa";

function NavigationMenu() {
    return (

        <Flex bg="white" p={4}>
            <Box>
                <Menu>
                    <MenuButton as={Button} leftIcon={<FaBars />}  rightIcon={<ChevronDownIcon />} variant="ghost">
                        Shop All
                    </MenuButton>
                    <MenuList>
                        <MenuItem to="/replacement-parts">Air, Fuel, Emission & Exhaust</MenuItem>
                        <MenuItem to="/performance-parts">Accessories, Body & Wipers</MenuItem>
                        <MenuItem to="/accessories">Battery, Electrical & Wiring</MenuItem>
                        <MenuItem to="/oil-and-fluids">Brakes, Steering & Suspension</MenuItem>
                        <MenuItem to="/special-offers">Cooling & Heating</MenuItem>
                        <MenuItem to="/replacement-parts">Electronics & Navigation
                        </MenuItem>
                        <MenuItem to="/performance-parts">Electronics & Navigation
                        </MenuItem>
                        <MenuItem to="/accessories">Tools, Fluids & Garage
                        </MenuItem>
                        <MenuItem to="/oil-and-fluids">Transmission & Drivetrain
                        </MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Link  style={{textDecoration: 'none'}} mr={4} mt={1} ml={2}>
                <Text fontSize="lg" color="#898382">All Products |</Text>
            </Link>
            <Link  style={{textDecoration: 'none'}}  mr={4} mt={1} ml={2}>
                <Text fontSize="lg" color="#898382">Replacement Parts  |</Text>
            </Link>
            <Link style={{textDecoration: 'none'}}  mt={1}  mr={4}>
                <Text fontSize="lg" color="#898382">Performance Parts  |</Text>
            </Link>
            <Link  style={{textDecoration: 'none'}} mt={1} mr={4}>
                <Text fontSize="lg" color="#898382">Accessories  |</Text>
            </Link>
            <Link style={{textDecoration: 'none'}}  mt={1} mr={4}>
                <Text fontSize="lg" color="#898382">Oil & Fluids  |</Text>
            </Link>
            <Link style={{textDecoration: 'none'}}  mt={1} mr={4} >
                <Text fontSize="lg" color="red">Special Offers  |</Text>
            </Link>
            <Link style={{textDecoration: 'none'}}  mt={1} mr={4}>
                <Text fontSize="lg" color="#898382">Order Lookup  |</Text>
            </Link>
        </Flex>
    );
}

export default NavigationMenu;
