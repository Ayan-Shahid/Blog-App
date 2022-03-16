import Image from "next/image";
import styled from "styled-components";

interface IWrapper {
	size?: string;
}

export const Wrapper = styled.figure<IWrapper>`
	margin: 0;
	padding: 0;
	height: ${({ size }) => size};
	position: relative;
	width: ${({ size }) => size};
	flex: none;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.full};
`;

export const Picture = styled(Image)`
	background: ${({ theme: { colors } }) => colors.primary.light};
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.full};
	object-fit: cover;
`;

export const Indicator = styled.span`
	position: absolute;
	height: 30%;
	width: 30%;
	right: 0;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.full};
	background: #3a3;
`;
