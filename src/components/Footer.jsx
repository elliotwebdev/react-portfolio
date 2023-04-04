import { Box, Flex } from '@chakra-ui/react';
import { Link } from "react-scroll"


export default function Footer(){

  return (
    <Box mt={12} pos="relative" bottom="0" py={4} bg="rgba(16, 20, 40, 0.8)" color="gray.400">
        <Flex justifyContent="center">
            <Link to="/" as="a" href="https://elliotweb.dev" smooth={true} duration={1500}>Elliot Web.Dev &copy; 2023</Link>
        </Flex>
    </Box>
  );
};

