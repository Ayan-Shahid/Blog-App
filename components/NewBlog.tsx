import React, { FunctionComponent } from "react";
import * as Styled from "styles/NewBlog.elements";
import { createReactEditorJS } from "react-editor-js";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";

const NewBlog: FunctionComponent = () => {
	const tools = {
		header: Header,
		list: List,
		image: Image,
	};
	const Editor = createReactEditorJS();
	return (
		<Styled.Wrapper>
			<Styled.Header>
				<Styled.Button>Publish</Styled.Button>
			</Styled.Header>
			<Editor tools={tools} />
		</Styled.Wrapper>
	);
};

export default NewBlog;
