import React, { FunctionComponent } from "react";
import * as Styled from "styles/SideBar.elements";
import { RiHome5Fill, RiEditFill, RiHome5Line, RiEditLine } from "react-icons/ri";
import { BsBookmarks, BsBookmarksFill } from "react-icons/bs";
import { IoDocumentText, IoDocumentTextOutline } from "react-icons/io5";
import Avatar from "./Avatar";
import { useBoolean } from "utilities/hooks";

const SideBar: FunctionComponent = () => {
	const { value: home, toggle: toggleHome } = useBoolean();
	const { value: bookmarks, toggle: toggleBookmarks } = useBoolean();
	const { value: document, toggle: toggleDocument } = useBoolean();
	const { value: edit, toggle: toggleEdit } = useBoolean();
	return (
		<Styled.Wrapper>
			<Avatar size="2.5rem" />
			<Styled.List>
				<Styled.Icon>
					{home ? <RiHome5Fill onClick={toggleHome} /> : <RiHome5Line onClick={toggleHome} />}
				</Styled.Icon>
				<Styled.Icon>
					{bookmarks ? (
						<BsBookmarksFill onClick={toggleBookmarks} />
					) : (
						<BsBookmarks onClick={toggleBookmarks} />
					)}
				</Styled.Icon>
				<Styled.Icon>
					{document ? (
						<IoDocumentText onClick={toggleDocument} />
					) : (
						<IoDocumentTextOutline onClick={toggleDocument} />
					)}
				</Styled.Icon>
				<Styled.Icon>
					{edit ? <RiEditFill onClick={toggleEdit} /> : <RiEditLine onClick={toggleEdit} />}
				</Styled.Icon>
			</Styled.List>
			<Styled.Icon />
		</Styled.Wrapper>
	);
};

export default SideBar;
