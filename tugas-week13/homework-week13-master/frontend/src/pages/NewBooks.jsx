import React from "react";
import { Box } from "@chakra-ui/react";
import BookForm from "../components/BookForm";

const NewBookPage = () => (
  <Box
    _hover={{
      bgGradient: "linear(to-r, blue.400, blue.300)",
    }}
    transition="background 0.3s ease"
    bgGradient="linear(to-r, blue.500, blue.400)"
    boxShadow="xl"
    borderRadius="md"
    p={8}
    maxW="500px"
    mx="auto"
    mt={10}
    color="white"
    fontFamily="sans-serif"
  >
    <BookForm />
  </Box>
);

export default NewBookPage;
