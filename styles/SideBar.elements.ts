import styled from "styled-components";

export const Wrapper = styled.nav`
	display: flex;
	background: ${({ theme: { colors } }) => colors.primary.default};
	align-items: center;
	justify-content: center;
	height: 5rem;
	flex: none;
	width: 100%;
	gap: 2rem;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
	flex-direction: row;
	position: sticky;
	bottom: 0.5rem;
	z-index: 1;
	order: 1;

	@media screen and (min-width: 700px) {
		padding: 2rem 0;
		flex-direction: column;
		height: 98%;
		position: static;
		width: 5rem;
		order: 0;
		justify-content: space-between;
	}
`;

export const List = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	flex-direction: row;
	gap: 2rem;

	@media screen and (min-width: 700px) {
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;
export const Icon = styled.article`
	transition: 0.3s;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	color: ${({ theme: { colors } }) => colors.secondary.light};

	cursor: pointer;
	&:hover {
		transform: scale(1.3);
	}
	&:active {
		transform: scale(1);
	}

	@media screen and (min-width: 700px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
		color: ${({ theme: { colors } }) => colors.secondary.light};
	}
`;
