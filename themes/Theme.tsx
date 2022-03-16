import React, { FunctionComponent } from "react";
import { ThemeProvider } from "styled-components";

const Theme: FunctionComponent = ({ children }) => {
	const theme = {
		colors: {
			primary: {
				default: "#2a2a2a",
				light: "#3a3a3a",
				dark: "#1a1a1a",
			},

			secondary: {
				default: "#eaeaea",
				light: "#fff",
				dark: "#dadada",
			},
		},
		fontSizes: {
			xl: "2.074rem",
			lg: "1.44rem",
			md: "1rem",
			sm: "0.694rem",
			xs: "0.482rem",
		},
		borderRadius: {
			full: "50%",
			xl: "2.074rem",
			lg: "1.44rem",
			md: "1rem",
			sm: "0.694rem",
			xs: "0.482rem",
			none: "0",
		},
	};

	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
