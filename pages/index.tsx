import type { NextPage } from "next";
import { signIn, useSession } from "next-auth/react";
import Home from "./Home";

const Index: NextPage = () => {
	const { data: session } = useSession();
	const handleSignIn = () => {
		signIn();
	};
	return <>{session ? <Home /> : <button onClick={handleSignIn}>Sign In</button>}</>;
};

export default Index;
