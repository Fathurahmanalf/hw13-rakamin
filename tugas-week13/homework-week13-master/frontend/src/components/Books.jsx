import { Box, Heading, Image, Link, Text, VStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

export default function Books({ id, title, author, image, publisher, year }) {
  return (
    <Link as={RouterLink} to={`/books/${id}`} textDecoration="none">
      <Box
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        boxShadow="md"
        p={4}
        transition="0.3s"
        _hover={{ transform: "scale(1.02)", shadow: "xl" }}
        cursor="pointer"
        bg="white"
        w="100%"
        maxW="300px"
      >
        <Image boxSize="100%" objectFit="cover" src={`http://localhost:8000/${image}`} alt={title} />
        <VStack spacing={2} align="start" mt={4}>
          <Heading size="md" color="teal.500" textAlign="left">
            {title} ({year})
          </Heading>
          <Text fontSize="sm" color="gray.600" textAlign="left">
            {author}
          </Text>
          <Text fontSize="sm" color="gray.600" textAlign="left">
            <span>Publisher: </span>
            {publisher}
          </Text>
        </VStack>
      </Box>
    </Link>
  );
}
