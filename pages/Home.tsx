import { Blog, SideBar, TopBar } from "components";
import { collection, getDocs } from "firebase/firestore";
import { fireStore } from "myFirebase";
import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import * as Styled from "styles/Index.elements";

const Home: NextPage = () => {
	const [blogs, setBlogs] = useState<
		| {
				id: string;
				data: string;
				username: string;
				avatar: string;
				createdAt: number;
				blogHeading: string;
				blogTitle: string;
				blogThumb: string;
		  }[]
		| null
	>(null);

	const getBlogs = async () => {
		await getDocs(collection(fireStore, "blogs")).then(({ docs }) => {
			const setDocs = docs.map((item) => {
				return {
					id: item.id,
					data: item.get("data"),
					createdAt: item.get("createdAt"),
					avatar: item.get("avatar"),
					blogTitle: item.get("blogTitle"),
					blogHeading: item.get("blogHeading"),
					username: item.get("username"),
					blogThumb: item.get("blogThumb"),
				};
			});
			setBlogs(setDocs);
		});
	};

	// console.log(blogs);

	useEffect(() => {
		getBlogs();
	}, []);

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
						{blogs?.map((item) => (
							<Blog key={item.id} {...item} />
						))}
					</Styled.Blogs>
				</Styled.Content>
			</Styled.Main>
		</>
	);
};

export default Home;
