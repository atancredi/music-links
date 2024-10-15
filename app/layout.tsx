import "./globals.css";
import Home from "./components/Home/Home";
import { customFontsVariables } from "./fonts/defineCustomFonts";

export default function RootLayout() {

	return (
		<html lang="en">
			<body className={"font-custom " + customFontsVariables}>
				<Home></Home>
			</body>
		</html>
	);
}
