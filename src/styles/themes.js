import { extendTheme } from "@chakra-ui/react";

//aca customizamos los temas de chakra, mas info en https://chakra-ui.com/docs/styled-system/customize-theme

export const themes = extendTheme({
    colors: {
      brand: {
        green: "#01f603",
        darkGreen: "#00b800",
        gray: "#464646",
        lightGray: "#dcdcdc",
        purple: "rgb(212, 0, 255)"
      },
    },
  },
);
