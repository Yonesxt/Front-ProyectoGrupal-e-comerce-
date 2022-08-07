import { extendTheme } from "@chakra-ui/react";

//aca customizamos los temas de chakra, mas info en https://chakra-ui.com/docs/styled-system/customize-theme

export const themes = extendTheme({
  styles: {
    global: {
      // styles for the `body`
      body: {
     //   bg: "gray.500",
        
      },
      colors: {
        brand: {
          100: "#06283D",
        },
      },
    },
  },
});
