import styled from "styled-components";

export const Wrapper = styled.main`
	width: 100%;
	height: 100vh;
	align-items: center;
	display: flex;
	background: ${({ theme: { colors } }) => colors.primary.dark};
	flex-direction: column;
	@media screen and (min-width: 700px) {
		flex-direction: row;
	}
`;

export const Blog = styled.section`
	height: 100%;
	width: 100%;
	overflow: scroll;
	flex-direction: column;
	padding: 2rem;
	gap: 2rem;
	display: flex;
	color: ${({ theme: { colors } }) => colors.secondary.default};
	.ql-toolbar {
		display: none;
	}
	.ql-snow {
		border: none;
	}
	@media screen and (min-width: 1000px) {
		padding: 3rem 10rem;
	}
	@media screen and (min-width: 550px) {
		padding: 2rem 5rem;
	}
`;

export const Header = styled.header`
	width: 100%;
	height: 4rem;
	display: flex;
	gap: 1rem;
`;
