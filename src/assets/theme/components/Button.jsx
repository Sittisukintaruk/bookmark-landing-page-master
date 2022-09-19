// You can also use the more specific type for
// a single part component: ComponentSingleStyleConfig
export const Button = {
  // The styles all button have in common
  baseStyle: {
    fontWeight: "medium",
    borderRadius: "base", // <-- border radius is same for all variants and sizes
    letterSpacing: "normal",
    border: "2px solid transparent",
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      h: "auto",
      fontSize: "sm",
      letterSpacing: "tight",
      px: 3.5, // <-- px is short for paddingLeft and paddingRight
      py: 3.5, // <-- py is short for paddingTop and paddingBottom
    },
    md: {
      h: "auto",
      fontSize: "md",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
    lg: {
      h: "auto",
      fontSize: "xl",
      px: 6, // <-- these values are tokens from the design system
      py: 4, // <-- these values are tokens from the design system
    },
  },
  // Two variants: outline and solid
  variants: {
    default: {
      bg: "SoftBlue.400",
      color: "white",
      letterSpacing: "wide",
      _hover: {
        borderColor: "SoftBlue.400",
        bg: "white",
        color: "SoftBlue.400",
      },
    },
    gray: {
      bg: "Neutral.Graywhite",
      color: "Neutral.DarkBluetrin",
      boxShadow: "lg",
      letterSpacing: "wide",
      _hover: {
        borderColor: "Neutral.VeryDarkBlue",
        bg: "white",
        color: "Neutral.DarkBluetrin",
      },
    },
    red: {
      bg: "primary.SoftRed",
      color: "white",
      letterSpacing: "widester",
      fontWeight: "medium",
      _hover: {
        borderColor: "primary.SoftRed",
        bg: "white",
        color: "primary.SoftRed",
      },
    },
    graymenu: {
      bg: "transparent",
      color: "white",
      letterSpacing: "widester",
      fontWeight: "medium",
      borderWidth: "3px",
      borderColor: "white",
      _hover: {
        bg: "primary.SoftRed",
        color: "white",
      },
    },
  },
  // The default size and variant values
  defaultProps: {
    size: "md",
    variant: "default",
  },
};
