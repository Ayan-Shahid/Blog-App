import React, { FunctionComponent } from "react";
import * as Styled from "styles/TopBar.elements";
import { FiSearch } from "react-icons/fi";

const TopBar: FunctionComponent = () => {
	return (
		<Styled.Wrapper>
			<Styled.Search>
				<FiSearch className="searchIcon" />
				<Styled.Input placeholder="Search..." />
			</Styled.Search>
		</Styled.Wrapper>
	);
};

export default TopBar;
