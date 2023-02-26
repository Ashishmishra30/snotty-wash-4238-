
import { useState, useEffect } from 'react';
import { Box, Heading, Text, SimpleGrid, Button, Select, Flex, Image } from '@chakra-ui/react';
import { FaExclamationCircle } from "react-icons/fa";


export const ProductPage = () => {
    const [sortOption, setSortOption] = useState('price-low');
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const getData = (page) => {
        fetch(`http://localhost:3004/products?_page=${page}&_limit=10`)
            .then((res) => res.json())
            .then((data) => setData(data))
    }

    useEffect(() => {
        getData(page);
    }, [page])

    const handleSortOptionChange = (e) => {
        setSortOption(e.target.value);
    };

    const sortProducts = (option) => {
        switch (option) {
            case 'price-low':
                return data.sort((a, b) => a.price - b.price);
            case 'price-high':
                return data.sort((a, b) => b.price - a.price);
            case 'rating-low':
                return data.sort((a, b) => a.ratings - b.ratings);
            case 'rating-high':
                return data.sort((a, b) => b.ratings - a.ratings);
            default:
                return data;
        }
    };

    const sortedProducts = sortProducts(sortOption);

    return (
        <Box p={4} bg="white">
            <Box margin="auto" textAlign="center" mt={5} mb={5}>
                <Button isDisabled={page === 1} onClick={() => setPage(page - 1)}>Prev</Button>
                <Button>{page}</Button>
                <Button onClick={() => setPage(page + 1)}>Next</Button>
            </Box>
            <Flex gap={20}>
                <Box mb={4}>
                    <Heading as="h1" size="lg" mb={2}>Products</Heading>
                    <Select value={sortOption} onChange={handleSortOptionChange} w="250px" mb={2}>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>

                    </Select>
                    <Select value={sortOption} onChange={handleSortOptionChange} w="250px" mb={2}>
                        <option value="rating-low">Rating: Low to High</option>
                        <option value="rating-high">Rating: High to Low</option>
                    </Select>
                </Box>
                <SimpleGrid columns={[1, 2]} spacing={5} >
                    {data.map((product) => (
                        <Box key={product.id} borderWidth="1px" rounded="md" p={4} textAlign="center" w="450px" >
                            <Image margin="auto" src={product.image} />
                            <Text color="black.700" fontSize="lg" fontWeight="bold" mb={2}>{product.name}</Text>
                            <Text mb={2}  fontWeight="bold" fontSize="lg" color="tomato">Price: ${product.price}</Text>
                            <Text mb={2}>Rating: {product.ratings}</Text>
                            <Box borderRadius={10} border="1px dotted red" w="60%" m="auto">
                                <Text p={2} fontSize="sm" fontWeight="bold" leftIcon={<FaExclamationCircle />} >Add A Vehicle to Check Fitment</Text>
                            </Box>
                            <Text p={2} fontSize="sm" fontWeight="bold" mt={35}>How Would You Like To Get This Item?</Text>
                            <Box borderRadius={10} border="2px solid gray" w="80%" m="auto" mt={5}>
                                <Text p={2} fontSize="sm" fontWeight="bold" >Store PickUp </Text>
                                <Text fontSize="sm">Not Available For This Item</Text>
                            </Box>
                            <Button bg="yellow" mt={5} color="black">Add To Cart</Button>
                        </Box>
                    ))}
                </SimpleGrid>
            </Flex>

        </Box>
    );
}

export default ProductPage;

