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
	width: 100%;

	gap: 1rem;
`;

export const LoginWrapper = styled.main`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
	width: 100%;

	background: ${({ theme: { colors } }) => colors.primary.dark};
`;

export const SignInButton = styled.button`
	padding: 1rem 2rem;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
	transition: 0.2s;
	background: ${({ theme: { colors } }) => colors.primary.default};
	color: ${({ theme: { colors } }) => colors.secondary.default};

	&:hover {
		transform: scale(1.1);
	}
	&:active {
		transform: scale(1);
	}
`;

export const Loader = styled.span`
	height: 2rem;
	width: 2rem;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.full};
	background: none;
	border: 0.2rem solid ${({ theme: { colors } }) => colors.primary.light};
	border-top: 0.2rem solid ${({ theme: { colors } }) => colors.secondary.default};
	animation: spin 1s infinite linear;
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
