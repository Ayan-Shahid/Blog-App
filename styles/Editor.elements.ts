import styled from "styled-components";

export const Wrapper = styled.section`
	overflow: scroll;
	.ql-editor {
		color: ${({ theme: { colors } }) => colors.secondary.default};
		border: none;
		height: 100%;
	}
	.ql-snow {
		border: none;
		color: white;
	}
	.quill > .ql-container > .ql-editor.ql-blank::before {
		color: ${({ theme: { colors } }) => colors.secondary.default};
	}
	.ql-blank {
		border: none;
	}
	.ql-toolbar {
		background: ${({ theme: { colors } }) => colors.primary.default};
		border: none;
		padding: 1rem;
		border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
		margin-bottom: 1rem;
		position: sticky;
		top: 0;
		z-index: 1;
	}

	.ql-stroke {
		color: ${({ theme: { colors } }) => colors.secondary.default};
	}
	svg {
		transition: 0.3s;
		&:hover {
			transform: scale(1.5);
		}
		&:active {
			transform: scale(1);
		}
	}
`;
