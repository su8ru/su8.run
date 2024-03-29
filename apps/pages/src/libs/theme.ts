import { ThemeConfig, extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { Dict } from "@chakra-ui/utils";

export const config: ThemeConfig = {
  useSystemColorMode: true,
  initialColorMode: "system",
};

const _fontFamily =
  "Inter,'Helvetica Neue',Arial,'Hiragino Kaku Gothic ProN','Hiragino Sans',Meiryo,sans-serif";

const theme = extendTheme({
  config,
  styles: {
    global: (props: Dict) => ({
      body: {
        bg: mode("white", "#131516")(props),
      },
    }),
  },
  fonts: {
    heading: _fontFamily,
    body: _fontFamily,
  },
});

export default theme;
