import { FC } from "react";
import {
  Box,
  Divider,
  HStack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import GitHubButton from "./githubButton";
import ColorModeButton from "./colorModeButton";

const Footer: FC = () => {
  const color = useColorModeValue("gray.500", "gray.400");

  return (
    <>
      <Divider />
      <Box as="footer" p="4">
        <VStack spacing="2">
          <HStack spacing="2">
            <GitHubButton />
            <ColorModeButton />
          </HStack>
          <VStack spacing="1">
            <Text color={color} align="center" fontSize="sm">
              Avatar by yukki____01.
            </Text>
            <Text color={color} align="center" fontSize="sm">
              © subaru 2023
            </Text>
          </VStack>
        </VStack>
      </Box>
    </>
  );
};

export default Footer;
