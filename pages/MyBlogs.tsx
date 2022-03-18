import { Blog, SideBar } from "components";
import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import * as Styled from "styles/MyBlogs.elements";

const MyBlogs: NextPage = () => {
	return (
		<>
			<Head>
				<title>Blog App</title>
				<meta name="description" content="A place to start writing your blogs" />
			</Head>
			<Styled.Main>
				<SideBar />
				<Styled.Content>
					<Styled.Title>My Blogs</Styled.Title>
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

export default MyBlogs;
