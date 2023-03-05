import { FC } from "react";
import { Box, Text, useBoolean, useColorModeValue } from "@chakra-ui/react";
import Image from "components/image";

export type Props = {
  webp: string;
  jpg: string;
  alt: string;
  title: string;
  href?: string;
};

const BigCard: FC<Props> = ({ webp, jpg, alt, title, href }) => {
  const [hover, setHover] = useBoolean(false);
  const bgColor = useColorModeValue("gray.100", "whiteAlpha.200");

  return (
    <Box
      as="article"
      borderRadius="8"
      bg={bgColor}
      boxShadow={hover ? "md" : "base"}
      transition="box-shadow .3s"
      overflow="hidden"
      position="relative"
      flexBasis="2xs"
      flexGrow="2"
      onMouseEnter={setHover.on}
      onMouseLeave={setHover.off}
    >
      <a href={href} target="_blank" rel="noopener">
        <Image webp={webp} jpg={jpg} alt={alt} w="1920" h="1080" />
        <Box
          position="absolute"
          bottom="0"
          w="100%"
          h="100%"
          bgGradient="linear(to-b,  blackAlpha.100, #313537cc)"
        >
          <Text
            fontSize="2xl"
            fontWeight="600"
            color="white"
            m="4"
            position="absolute"
            bottom="0"
            textDecoration={href && hover ? "underline" : "default"}
          >
            {title}
          </Text>
        </Box>
      </a>
    </Box>
  );
};

export default BigCard;
