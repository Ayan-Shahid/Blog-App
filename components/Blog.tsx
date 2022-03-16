import React, { FunctionComponent } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { useTheme } from "styled-components";
import * as Styled from "styles/Blog.elements";
import * as Shared from "styles/Shared.elements";

import Avatar from "./Avatar";

const Blog: FunctionComponent = () => {
	const {
		colors: { secondary },
	} = useTheme();
	return (
		<Styled.Wrapper>
			<Styled.Row>
				<Styled.Column>
					<Styled.Header>
						<Avatar size="2rem" />
						<Shared.Text weight={500} color={secondary.default}>
							Thor Chen in Bits and Pieces
						</Shared.Text>
						<Shared.Text weight={500} color="#777">
							Feb 17
						</Shared.Text>
					</Styled.Header>
					<Styled.Title>React Design Patterns: Return Component From Hooks</Styled.Title>
					<Styled.InfoText>
						A Potential New Pattern Inspired by “Partial Application”: With practical examples using
						Material-UI and TypeScript — Hooks have been introduced to the React community many
						years, and there are many new coding.
					</Styled.InfoText>
					<Shared.Row width="100%" justifyContent="space-between">
						<Styled.Footer>
							<Styled.Tag>JavaScript</Styled.Tag>
							<Shared.Text weight={500} color="#777">
								5 min read
							</Shared.Text>
						</Styled.Footer>
						<Styled.Icon>
							<BsFillBookmarkPlusFill />
						</Styled.Icon>
					</Shared.Row>
				</Styled.Column>
				<Styled.ImageWrapper>
					<Styled.Picture
						src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
						alt="thumb"
						layout="fill"
					/>
				</Styled.ImageWrapper>
			</Styled.Row>
		</Styled.Wrapper>
	);
};

export default Blog;
