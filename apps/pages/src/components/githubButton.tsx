import { FC } from "react";
import { IconButton, Tooltip, useColorModeValue } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";

const GitHubButton: FC = () => {
  const iconColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Tooltip label="GitHub repository" placement="top">
      <IconButton
        as="a"
        variant="ghost"
        color={iconColor}
        aria-label="GitHub: su8ru/su8.run"
        href="https://github.com/su8ru/su8.run"
        target="_blank"
        rel="noopener"
      >
        <SiGithub />
      </IconButton>
    </Tooltip>
  );
};

export default GitHubButton;
