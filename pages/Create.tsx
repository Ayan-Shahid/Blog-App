import { NewBlog, SideBar } from "components";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Create.elements";

const Create: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<SideBar />
			<NewBlog />
		</Styled.Wrapper>
	);
};

export default Create;
