import { addDoc, collection, getDocs } from "firebase/firestore";
import { fireStore } from "myFirebase";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import React, { ChangeEvent, useEffect, useState } from "react";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import * as Styled from "styles/CurrentBlog.elements";
import "react-quill/dist/quill.snow.css";
import * as Shared from "styles/Shared.elements";
import { Avatar, Comment, NewComment, SideBar } from "components";
import moment from "moment";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { useBoolean } from "utilities/hooks";

const CurrentBlog: NextPage = () => {
	const [data, setData] = useState<string>("");
	const [username, setUsername] = useState<string>("");
	const [userImage, setUserImage] = useState<string>("");
	const [createdAt, setCreatedAt] = useState<number>(0);
	const {
		value: commentIsLoading,
		setFalse: setCommentIsLoadingFalse,
		setTrue: setCommentIsLoadingTrue,
	} = useBoolean();
	const [comment, setComment] = useState<string>("");
	const [comments, setComments] = useState<
		{ text: string; username: string; avatar: string; createdAt: number; id: string }[] | null
	>(null);

	const { data: session } = useSession();

	const {
		query: { id },
	} = useRouter();

	const getData = async () => {
		const blog = (await getDocs(collection(fireStore, "blogs"))).docs.find(
			(item) => item.id === id
		);

		setData(blog?.get("data"));
		setUsername(blog?.get("username"));
		setUserImage(blog?.get("avatar"));
		setCreatedAt(blog?.get("createdAt"));
	};

	const addComment = async () => {
		if (comment !== "" && setCommentIsLoadingFalse && setCommentIsLoadingTrue) {
			setCommentIsLoadingTrue();
			await addDoc(collection(fireStore, "comments"), {
				text: comment,
				username: session?.user?.name,
				avatar: session?.user?.image,
				createdAt: Date.now(),
				blogId: id,
			});
			setCommentIsLoadingFalse();
			setComment("");
		}
	};

	const handleComment = (event: ChangeEvent<HTMLTextAreaElement>) => {
		setComment(event.target.value);
	};

	const getComments = async () => {
		const comment = (await getDocs(collection(fireStore, "comments"))).docs.filter(
			(item) => item.get("blogId") === id
		);

		const mapComments = comment
			.map((item) => {
				return {
					text: item.get("text"),
					username: item.get("username"),
					avatar: item.get("avatar"),
					createdAt: item.get("createdAt"),
					id: item.id,
				};
			})
			.sort((a, b) => b.createdAt - a.createdAt);
		setComments(mapComments);
	};

	useEffect(() => {
		let isMounted = true;

		if (isMounted) {
			getData();
			getComments();
		}

		return () => {
			isMounted = false;
		};
	}, [addComment]);

	return (
		<Styled.Wrapper>
			<SideBar />
			<Styled.Blog>
				<Styled.Header>
					<Avatar src={userImage} size="3.5rem" />
					<Shared.Column alignItems="flex-start" justifyContent="center" gap="0.5rem">
						<Shared.Text>{username}</Shared.Text>
						<Shared.Text color="#777" fontSize="sm">
							{moment(createdAt).startOf("hour").fromNow()}
						</Shared.Text>
					</Shared.Column>
				</Styled.Header>

				<ReactQuill modules={{ toolbar: { container: [] } }} value={data || ""} readOnly={true} />

				<NewComment
					value={comment}
					isLoading={commentIsLoading}
					onChange={handleComment}
					addComment={addComment}
				/>

				<Shared.Column alignItems="flex-start" gap="0">
					<Shared.Text fontSize="xl">Comments</Shared.Text>
					{comments?.map((item) => (
						<Comment key={item.id} {...item} />
					))}
				</Shared.Column>
			</Styled.Blog>
		</Styled.Wrapper>
	);
};

export default CurrentBlog;
