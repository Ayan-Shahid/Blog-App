import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { fireStore, storage } from "myFirebase";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import * as Styled from "styles/NewBlog.elements";
import Editor from "./Editor";
import LoadingButton from "./LoadingButton";
const NewBlog: FunctionComponent = () => {
	let editorRef = useRef<HTMLElement>(null).current;
	const [value, setValue] = useState<string>("");
	const [blogHeading, setBlogHeading] = useState<string>();
	// const [blogTitle, setBlogTitle] = useState<string>();
	const [blogThumb, setBlogThumb] = useState<string>();
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const router = useRouter();

	const { data } = useSession();

	const saveBlog = async () => {
		if (value.length > 5 && blogThumb) {
			setIsLoading(true);
			const uploadImage = (
				await uploadString(ref(storage, Date.now().toString()), blogThumb, "data_url")
			).ref;
			const uploadedImage = await getDownloadURL(uploadImage);

			await addDoc(collection(fireStore, "blogs"), {
				data: value,
				username: data?.user?.name,
				avatar: data?.user?.image,
				createdAt: Date.now(),
				blogHeading,
				blogThumb: uploadedImage,
			}).then(() => {
				setIsLoading(false);
				router.push("/");
			});
		}
	};

	useEffect(() => {
		setBlogHeading(editorRef?.querySelector("h1")?.innerText);
		setBlogThumb(editorRef?.querySelector("img")?.src);
		editorRef?.scroll();
	}, [value, editorRef]);

	return (
		<Styled.Wrapper ref={(ref) => (editorRef = ref)}>
			<Styled.Header>
				<LoadingButton text="Publish" isLoading={isLoading} onClick={saveBlog} />
			</Styled.Header>
			<Editor value={value} setValue={setValue} />
		</Styled.Wrapper>
	);
};

export default NewBlog;
