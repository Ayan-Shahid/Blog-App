import styled from "styled-components";

export const Main = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 0 0.5rem;
	height: 100vh;
	overflow: hidden;
	background: ${({ theme: { colors } }) => colors.primary.dark};
	gap: 1rem;

	@media screen and (min-width: 700px) {
		flex-direction: row;
		gap: 0;
	}
`;

export const Blogs = styled.section`
	padding: 2rem 2rem;
	gap: 4rem;
	display: flex;
	flex-direction: column;
	height: 70%;

	overflow: scroll;
	@media screen and (min-width: 900px) {
		padding: 1rem 10rem 5rem 10rem;
		height: 78%;
	}
`;

export const Content = styled.section`
	display: flex;
	flex-direction: column;
	height: 100%;
	gap: 1rem;
`;
