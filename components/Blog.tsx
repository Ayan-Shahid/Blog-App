import moment from "moment";
import Link from "next/link";
import React, { FunctionComponent } from "react";
import { useTheme } from "styled-components";
import * as Styled from "styles/Blog.elements";
import * as Shared from "styles/Shared.elements";

import Avatar from "./Avatar";

interface IBlog {
	id?: string;
	username?: string;
	avatar?: string;
	blogHeading?: string;
	createdAt?: number;
	blogThumb?: string;
}

const Blog: FunctionComponent<IBlog> = ({
	id,
	username,
	avatar,
	blogHeading,
	createdAt,
	blogThumb,
}: IBlog) => {
	const {
		colors: { secondary },
	} = useTheme();
	return (
		<Link passHref href={{ pathname: "/CurrentBlog", query: { id: id } }}>
			<Styled.Wrapper>
				<Styled.Row>
					<Styled.Column>
						<Styled.Header>
							<Avatar src={avatar} size="2rem" />
							<Shared.Text weight={500} color={secondary.default}>
								{username}
							</Shared.Text>
							<Shared.Text weight={500} color="#777">
								{moment(createdAt).startOf("hour").fromNow()}
							</Shared.Text>
						</Styled.Header>
						<Styled.Title>{blogHeading}</Styled.Title>
						<Shared.Row width="100%" justifyContent="space-between">
							<Styled.Footer>
								<Shared.Text weight={500} color="#777">
									5 min read
								</Shared.Text>
							</Styled.Footer>
						</Shared.Row>
					</Styled.Column>
					<Styled.ImageWrapper>
						<Styled.Picture
							src={
								blogThumb ||
								"https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
							}
							alt="thumb"
							layout="fill"
						/>
					</Styled.ImageWrapper>
				</Styled.Row>
			</Styled.Wrapper>
		</Link>
	);
};

export default Blog;
