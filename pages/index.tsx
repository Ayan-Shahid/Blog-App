import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Home from "./Home";

import * as Styled from "styles/Index.elements";

const Index: NextPage = () => {
	const { status } = useSession();
	const handleSignIn = () => {
		signIn();
	};
	return (
		<>
			{status === "authenticated" ? (
				<Home />
			) : (
				<Styled.LoginWrapper>
					{status === "unauthenticated" ? (
						<Styled.SignInButton onClick={handleSignIn}>Sign In with Google</Styled.SignInButton>
					) : null}
					{status === "loading" ? <Styled.Loader /> : null}
				</Styled.LoginWrapper>
			)}
		</>
	);
};

export default Index;
