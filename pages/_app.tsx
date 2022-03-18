import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Theme from "themes/Theme";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Theme>
			<SessionProvider session={pageProps.session}>
				<Component {...pageProps} />
			</SessionProvider>
		</Theme>
	);
}

export default MyApp;
