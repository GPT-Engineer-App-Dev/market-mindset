import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Header */}
      <Box bg="gray.800" color="white" py={4}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading as="h1" size="lg">Financial Times</Heading>
            <HStack spacing={8}>
              <Link href="#" color="white">Home</Link>
              <Link href="#" color="white">News</Link>
              <Link href="#" color="white">Markets</Link>
              <Link href="#" color="white">Opinion</Link>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Featured Article */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Featured Article</Heading>
          <Text fontSize="lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Text>
        </Box>

        {/* Sidebar */}
        <Box flex="1" bg="gray.100" p={4} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="md" mb={4}>Sidebar</Heading>
          <VStack spacing={4}>
            <Link href="#">Additional Link 1</Link>
            <Link href="#">Additional Link 2</Link>
            <Link href="#">Additional Link 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box bg="gray.800" color="white" py={4} mt={8}>
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Text>&copy; 2023 Financial Times</Text>
            <HStack spacing={4}>
              <Link href="#" isExternal><FaFacebook /></Link>
              <Link href="#" isExternal><FaTwitter /></Link>
              <Link href="#" isExternal><FaLinkedin /></Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </Container>
  );
};

export default Index;