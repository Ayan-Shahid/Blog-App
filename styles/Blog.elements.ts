import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.article`
	width: 100%;

	background: ${({ theme: { colors } }) => colors.primary.default};
	padding: 1rem;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.lg};
	@media screen and (min-width: 550px) {
		padding: 1.5rem;
	}
`;

export const Row = styled.article`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	align-items: center;
	justify-content: flex-start;
	gap: 1rem;
	padding: 0;
	position: relative;
`;

export const Header = styled.header`
	display: flex;
	width: 100%;
	align-items: center;
	padding: 0;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
	gap: 0.5rem;
	@media screen and (min-width: 550px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
		gap: 1rem;
	}
`;
export const Footer = styled.footer`
	display: flex;
	width: 100%;
	align-items: center;
	padding: 0;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
	gap: 0.5rem;
	@media screen and (min-width: 550px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
		gap: 1rem;
	}
`;

export const Column = styled(Row)`
	flex-direction: column;
	gap: 0.5rem;
	align-items: flex-start;

	@media screen and (min-width: 550px) {
		gap: 1rem;
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
`;

export const Tag = styled.span`
	background: ${({ theme: { colors } }) => colors.primary.light};
	padding: 0.5rem;
	font-size: ${({ theme: { fontSizes } }) => fontSizes.xs};
	color: ${({ theme: { colors } }) => colors.secondary.default};
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.sm};
	user-select: none;

	@media screen and (min-width: 550px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	}
`;

export const ImageWrapper = styled.figure`
	margin: 0;
	padding: 0;
	height: 100%;

	width: 5rem;
	position: relative;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};

	@media screen and (min-width: 1000px) {
		width: 15rem;
	}
	@media screen and (min-width: 550px) {
		width: 10rem;
	}
`;

export const Picture = styled(Image)`
	position: absolute;
	height: 100%;
	width: 100%;
	background: ${({ theme: { colors } }) => colors.primary.light};
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};
`;

export const InfoText = styled.p`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	color: ${({ theme: { colors } }) => colors.secondary.default};
	display: none;
	margin: 0;
	padding: 0;
	@media screen and (min-width: 1000px) {
		font-weight: 100;
		display: block;
	}

	height: 2.7rem;
	overflow: hidden;
`;

export const Title = styled.h3`
	font-size: ${({ theme: { fontSizes } }) => fontSizes.sm};
	color: ${({ theme: { colors } }) => colors.secondary.default};
	margin: 0;
	height: 1rem;
	overflow: hidden;
	@media screen and (min-width: 1000px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
	}
	@media screen and (min-width: 550px) {
		font-size: ${({ theme: { fontSizes } }) => fontSizes.lg};
		height: auto;
		overflow: auto;
	}
`;
