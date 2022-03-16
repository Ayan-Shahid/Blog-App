import styled from "styled-components";

export const Wrapper = styled.article`
	display: flex;
	width: 100%;
	height: 5rem;
	align-items: center;
	justify-content: center;
	padding: 2rem 2rem 0 2rem;
	@media screen and (min-width: 700px) {
		justify-content: flex-end;
		padding: 4rem;
	}
`;

export const Input = styled.input`
	flex: 1;
	padding: 1rem 3rem;
	color: ${({ theme: { colors } }) => colors.secondary.default};
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
	background: ${({ theme: { colors } }) => colors.primary.default};
	transition: 0.3s;

	&:focus:not(:hover) {
		outline: 2px solid ${({ theme: { colors } }) => colors.primary.light};
		background: none;
	}
	&:hover:not(:focus) {
		background: ${({ theme: { colors } }) => colors.primary.light};
	}
`;

export const Search = styled.article`
	display: flex;
	width: 100%;

	align-items: center;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};
	color: ${({ theme: { colors } }) => colors.secondary.default};
	position: relative;

	.searchIcon {
		position: absolute;
		margin: 0 1rem;
	}
	@media screen and (min-width: 700px) {
		width: 15rem;
	}
`;
