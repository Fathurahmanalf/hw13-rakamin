import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBook, getBookDetailById } from "../modules/fetch";

export default function BookDetails() {
  const [book, setBook] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
        setLoading(false);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const handleDeleteBook = async () => {
    try {
      await deleteBook(id);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Box
      bgColor="blue.100"
      p="16"
      borderRadius="lg"
      boxShadow="lg"
      transition="0.3s"
      _hover={{ transform: "scale(1.02)", bgColor: "blue.200" }}
    >
      {isLoading ? (
        <Skeleton height="300px" my="6" />
      ) : (
        <Flex my="6">
          <Box w="300px">
            <Image
              src={`http://localhost:8000/${book.image}`}
              alt={book.title}
              borderRadius="md"
              boxShadow="md"
              transition="0.3s"
              _hover={{ transform: "scale(1.1)" }}
            />
          </Box>
          <Box ml="8">
            <Heading as="h1" size="lg" color="teal.500">
              {book.title}
            </Heading>
            <Text fontSize="xl" fontWeight="semibold" color="gray.600">
              {book.author}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.600">
              {book.publisher}
            </Text>
            <Text fontSize="xl" fontWeight="semibold" color="gray.600" mb="4">
              {book.year} | {book.pages} pages
            </Text>
          </Box>
        </Flex>
      )}
      {localStorage.getItem('token') && (
        <HStack mt="4">
          <Popover>
            <PopoverTrigger>
              <Button colorScheme="red" transition="0.3s" _hover={{ bg: "red.500" }}>
                Delete
              </Button>
            </PopoverTrigger>
            <PopoverContent bgColor="white">
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader color="teal.500">Confirmation!</PopoverHeader>
              <PopoverBody color="gray.800">
                Are you sure you want to delete this book?
              </PopoverBody>
              <Button onClick={handleDeleteBook} colorScheme="red" mt="2">
                Delete
              </Button>
            </PopoverContent>
          </Popover>
          <Link to={`/editbook/${id}`}>
            <Button colorScheme="teal" transition="0.3s" _hover={{ bg: "teal.500" }}>
              Edit
            </Button>
          </Link>
        </HStack>
      )}
    </Box>
  );
}
