import { Blog, SideBar, TopBar } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import * as Styled from "styles/Index.elements";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Blog App</title>
				<meta name="description" content="A place to start writing your blogs" />
			</Head>
			<Styled.Main>
				<SideBar />
				<Styled.Content>
					<TopBar />
					<Styled.Blogs>
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
						<Blog />
					</Styled.Blogs>
				</Styled.Content>
			</Styled.Main>
		</>
	);
};

export default Home;
