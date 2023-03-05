import { FC } from "react";
import { Box, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import GitHubButton from "components/githubButton";
import ColorModeButton from "components/colorModeButton";
import { useSubaruGray } from "libs/colors";

const Footer: FC = () => {
  const color = useSubaruGray();

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
