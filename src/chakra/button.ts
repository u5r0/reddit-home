import { ComponentStyleConfig  } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 'full',
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "brand.500",
      _hover: {
        bg: "brand.600",
      },
    },
    outline: {
      color: "black",
      bg: "gray.200",
      _hover: {
        bg: "gray.300",
      },  
    }
  }
}