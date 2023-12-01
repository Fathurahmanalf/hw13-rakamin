import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BookForm from "../components/BookForm";
import { getBookDetailById } from "../modules/fetch";

export default function EditBookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await getBookDetailById(id);
        setBook(response.book);
      } catch (e) {
        console.log(e);
      }
    };
    fetchBook();
  }, [id]);

  const bgColor = useColorModeValue("gray.100", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      p={8}
      mt={8}
      mx="auto"
      maxW="600px"
      bgColor={bgColor}
      borderColor={borderColor}
      borderWidth="1px"
      borderRadius="md"
      boxShadow="lg"
    >
      <Heading mb={4} textAlign="center" color="teal.500">
        Edit Book
      </Heading>
      {book ? (
        <BookForm bookData={book} />
      ) : (
        <Text textAlign="center" color="gray.500">
          Loading...
        </Text>
      )}
    </Box>
  );
}
