import moment from "moment";
import React, { FunctionComponent } from "react";
import * as Styled from "styles/Comment.elements";
import * as Shared from "styles/Shared.elements";
import Avatar from "./Avatar";

interface IComment {
	text?: string;
	username?: string;
	createdAt?: number;
	avatar?: string;
}

const Comment: FunctionComponent<IComment> = ({ text, username, createdAt, avatar }: IComment) => {
	return (
		<Styled.Wrapper>
			<Shared.Row>
				<Avatar src={avatar} size="3rem" />
				<Shared.Column alignItems="flex-start" justifyContent="center" gap="0.5rem">
					<Shared.Text>{username}</Shared.Text>
					<Shared.Text fontSize="sm" color="#777">
						{moment(createdAt).startOf("hour").fromNow()}
					</Shared.Text>
				</Shared.Column>
			</Shared.Row>
			<Shared.Text>{text}</Shared.Text>
		</Styled.Wrapper>
	);
};

export default Comment;
