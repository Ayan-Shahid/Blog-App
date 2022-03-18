import { NewBlog, SideBar } from "components";
import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import * as Styled from "styles/Create.elements";

const Create: NextPage = () => {
	return (
		<>
			<Head>
				<title>Blog App</title>
			</Head>
			<Styled.Wrapper>
				<SideBar />
				<NewBlog />
			</Styled.Wrapper>
		</>
	);
};

export default Create;
