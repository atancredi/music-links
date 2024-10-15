import "./globals.css";
import { customFontsVariables } from "./fonts/defineCustomFonts";

export default function RootLayout({ children }) {

	return (
		<html lang="en">
			<body className={"font-custom " + customFontsVariables}>
				{children}
			</body>
		</html>
	);
}
