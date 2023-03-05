import { FC } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { IconButton, Tooltip, useColorMode } from "@chakra-ui/react";
import { useSubaruGray } from "libs/colors";

const ColorModeButton: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const iconColor = useSubaruGray();

  return (
    <Tooltip
      label={`Turn to ${colorMode === "light" ? "Dark" : "Light"} Mode`}
      placement="top"
    >
      <IconButton
        variant="ghost"
        color={iconColor}
        onClick={toggleColorMode}
        fontSize="xl"
        aria-label={`Turn to ${colorMode === "light" ? "Dark" : "Light"} Mode`}
      >
        {colorMode === "light" ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
      </IconButton>
    </Tooltip>
  );
};

export default ColorModeButton;
