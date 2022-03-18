import styled from "styled-components";

export const Wrapper = styled.main`
	width: 100%;
	height: 100vh;
	align-items: center;
	display: flex;
	background: ${({ theme: { colors } }) => colors.primary.dark};
`;

export const Blog = styled.section`
	height: 100%;
	width: 100%;
	overflow: scroll;
	flex-direction: column;
	padding: 3rem 10rem;
	gap: 2rem;
	display: flex;
	color: ${({ theme: { colors } }) => colors.secondary.default};
	.ql-toolbar {
		display: none;
	}
	.ql-snow {
		border: none;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 4rem;
	display: flex;
	gap: 1rem;
`;
