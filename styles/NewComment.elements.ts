import styled from "styled-components";

export const Wrapper = styled.article`
	width: 100%;
	padding: 1rem 0;
	display: flex;
	gap: 1rem;
	.loadingButton {
	}
`;

export const Input = styled.textarea`
	flex: 1;
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary.default};
	padding: 1rem;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
	color: ${({ theme: { colors } }) => colors.secondary.default};
	border: none;
	&:focus {
		outline: none;
	}
	resize: none;
`;
