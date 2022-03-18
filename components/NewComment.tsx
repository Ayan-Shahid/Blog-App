import { useSession } from "next-auth/react";
import React, { FunctionComponent, MouseEventHandler, TextareaHTMLAttributes } from "react";
import * as Styled from "styles/NewComment.elements";
import * as Shared from "styles/Shared.elements";

import Avatar from "./Avatar";
import LoadingButton from "./LoadingButton";

interface INewComment extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	addComment?: MouseEventHandler<HTMLButtonElement>;
	isLoading?: boolean;
}

const NewComment: FunctionComponent<INewComment> = ({
	isLoading,
	addComment,
	...props
}: INewComment) => {
	const { data, status } = useSession();
	return (
		<Styled.Wrapper>
			<Avatar
				status={status === "authenticated" ? "online" : "offline"}
				src={data?.user?.image}
				size="3rem"
			/>

			<Shared.Column height="15rem" width="100%" alignItems="flex-start">
				<Styled.Input {...props} placeholder="Add a comment..." />
				<LoadingButton
					className="loadingButton"
					text="Comment"
					isLoading={isLoading}
					onClick={addComment}
				/>
			</Shared.Column>
		</Styled.Wrapper>
	);
};

export default NewComment;
