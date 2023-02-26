import { useState } from 'react';
import { Flex, Image, Input, Button, IconButton, Tooltip, useDisclosure } from '@chakra-ui/react';
import { FaSearch, FaCar, FaRegUser, FaShoppingCart, FaLocationArrow } from 'react-icons/fa';
import LoginModal from './LoginModal';
import { Link } from 'react-router-dom';

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = () => {
   
  };

  const handleCartClick = () => {
   
  };

  return (
    // position="fixed" use this inside flex
    <Flex align="center" justify="space-between" h="80px" bg="#373737">
      <Flex align="center">
        <Link to="/">
        <Image src="https://i.postimg.cc/43ycxZxH/AutoMads.png" alt="Logo" w={200} h="70px" mr={4} />
        </Link>
        <Link to="/products">
        <Button onClick={handleSearchSubmit} leftIcon={<FaCar />} colorScheme="orange" h="60px">ALL PRODUCTS</Button>
        </Link>
        <Input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} placeholder="Search" bg="white" w={600} h="60px" />
        <Button onClick={handleSearchSubmit} leftIcon={<FaSearch />} colorScheme="orange" h="60px" />
      </Flex>
      <Flex align="center">
        <Tooltip >
          <Button leftIcon={<FaLocationArrow />} ml={2} bg="#4b4b4b" h="60px" color="white">Choose A Store</Button>
        </Tooltip>
        <Tooltip label="Login">
          <Button leftIcon={<FaRegUser />} onClick={onOpen} mr={4} ml={2} bg="#4b4b4b" h="60px" color="white">Username</Button>
        </Tooltip>
        <Tooltip label="Cart">
          <IconButton icon={<FaShoppingCart />} variant="ghost" onClick={handleCartClick} mr={4} h="60px" color="white" bg="#4b4b4b">{0}</IconButton>
        </Tooltip>
      </Flex>
      <LoginModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}

export default Navbar;

