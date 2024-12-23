import "./globals.css";
import { customFontsVariables } from "./fonts/defineCustomFonts";

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<head>
			<meta name="viewport" content="width=device-width, maximum-scale=1.0, user-scalable=no" />
			</head>
			<body className={"font-custom " + customFontsVariables}>
				{children}
			</body>
		</html>
	);
}
