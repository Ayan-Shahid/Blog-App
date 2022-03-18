import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import dynamic from "next/dynamic";
import * as Styled from "styles/Editor.elements";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";

interface IEditor {
	value?: string;
	setValue?: Dispatch<SetStateAction<string>>;
}

const Editor: FunctionComponent<IEditor> = ({ value, setValue }: IEditor) => {
	const modules = {
		toolbar: {
			container: [
				[{ header: [1, 2, 3, 4, 5, 6, false] }],
				["bold", "italic", "underline"],
				["blockquote", "code-block"],

				[{ list: "ordered" }, { list: "bullet" }],
				[{ align: [] }],
				["link", "image"],
				["clean"],
				[{ color: [] }],
			],
		},
	};

	const formats = [
		"header",
		"font",
		"size",
		"bold",
		"italic",
		"underline",
		"strike",
		"blockquote",
		"list",
		"bullet",
		"indent",
		"link",
		"image",
		"color",
		"code-block",
	];

	return (
		<Styled.Wrapper>
			<ReactQuill
				formats={formats}
				modules={modules}
				value={value}
				onChange={setValue}
				placeholder="Write something...."
			/>
		</Styled.Wrapper>
	);
};

export default Editor;
