import { Link } from "react-router-dom";
import { Flex, Spacer, Box, Button, Heading, Image } from "@chakra-ui/react";
import { SmallAddIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Flex mt="3" mb="5" mr="2" ml="2">
        <Box p="2">
          <Heading size="lg" fontFamily="Quicksand" color="red">
            WEbook
          </Heading>
        </Box>
        <Spacer />
        <Box>
          <Button colorScheme="red" mr="2">
            <Link to="/">Home</Link>
          </Button>
          <Button colorScheme="red">
            <Link to="/create">
              New Blog
              <SmallAddIcon />
            </Link>
          </Button>
        </Box>
      </Flex>
    </nav>
  );
};

export default Navbar;
