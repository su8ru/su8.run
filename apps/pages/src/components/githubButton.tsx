import { FC } from "react";
import { IconButton, Tooltip } from "@chakra-ui/react";
import { SiGithub } from "react-icons/si";
import { useSubaruGray } from "libs/colors";

const GitHubButton: FC = () => {
  const iconColor = useSubaruGray();

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
