import { PaletteOptions } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

export const typographyProperties: TypographyOptions = {
  htmlFontSize: 16,
  fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  h1: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "48px",
    lineHeight: "64px",
    letterSpacing: "0",
  },
  h2: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 700,
    fontSize: "42px",
    lineHeight: "56px",
    letterSpacing: "-0.00833em",
  },
  h3: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "36px",
    lineHeight: "48px",
    letterSpacing: "0",
  },
  h4: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "32px",
    lineHeight: "40px",
    letterSpacing: "0.25px",
  },
  h5: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "30px",
    letterSpacing: "0.3px",
  },
  h6: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "20px",
    lineHeight: "28px",
    letterSpacing: "0.15px",
  },
  subtitle1: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "28px",
    letterSpacing: "0.15px",
  },
  subtitle2: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 700,
    fontSize: "15px",
    lineHeight: "22px",
    letterSpacing: "0.1px",
  },
  body1: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "22px",
    letterSpacing: "0.15px",
  },
  body2: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    letterSpacing: "0.15px",
  },

  button: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "15px",
    lineHeight: "26px",
    letterSpacing: "0.46px",
    textTransform: "capitalize",
    borderRadius: "4px",
  },
  caption: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 500,
    fontSize: "12px",
    lineHeight: "15px",
    letterSpacing: "0.4px",
  },
  overline: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    letterSpacing: "1px",
    textTransform: "uppercase",
  }
};

export const lightModePalette: PaletteOptions = {
  mode: "light",
  common: {
    black: "#000000",
    white: "#FFFFFF",
  },
  background: {
    paper: "#FFFFFF",
    default: "#F9FAFB",
  },
  text: {
    primary: "#1C1B1F",
    secondary: "#546376",
  },
  primary: {
    main: "#6258FF", // default
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main and palette.action.hover,
    contrastText: "#FFFFFF",
  },
  secondary: {
    main: "#006DF5",
    contrastText: "#FFFFFF",
  },
  warning: {
    main: "#F2994A",
    contrastText: "#FFFFFF",
    light: "#FFDCC3",
    dark: "#944200",
  },
  error: {
    main: "#ED0039",
    light: "#ffdad9",
    dark: "#940015",
    contrastText: "#FFFFFF",
  },
  info: {
    main: "#A352C2",
    contrastText: "#FFFFFF",
  },
  success: {
    main: "#008945",
    light: "#baf0cb",
    contrastText: "#FFFFFF",
  },
  action: {
    active: "#949DB2",
    hover: "rgba(100, 56, 188, 0.04)",
    hoverOpacity: 0.03,
    selected: "rgba(28, 15, 19, 0.08)",
    selectedOpacity: 0.08,
    disabled: "rgba(3, 6, 11, 0.26)",
    disabledBackground: "rgba(3, 6, 11, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(28, 15, 19, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12,
  },
};

