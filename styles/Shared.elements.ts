import styled from "styled-components";

interface IStyles {
	width?: string;
	padding?: string;
	margin?: string;
	height?: string;
	fontSize?: "xl" | "lg" | "md" | "sm" | "xs" | string;
	radius?: "xl" | "lg" | "md" | "sm" | "xs" | "none" | string;
	justifyContent?: "flex-start" | "center" | "space-between" | "flex-end";
	alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
	background?: string;
	color?: string;
	gap?: string;
	flex?: string;
	flexWrap?: "nowrap" | "wrap";
	wordBreak?: "break-all" | "keep-all" | "normal";
	weight?: number;
}

export const Row = styled.article<IStyles>`
	display: flex;
	flex-wrap: ${({ flexWrap }) => flexWrap};
	flex-direction: row;
	justify-content: ${({ justifyContent }) => justifyContent || "center"};
	align-items: ${({ alignItems }) => alignItems || "center"};
	gap: ${({ gap }) => gap || "1rem"};
	flex: ${({ flex }) => flex};
	width: ${({ width }) => width || "auto"};
	height: ${({ height }) => height || "auto"};
	margin: ${({ margin }) => margin || 0};
	padding: ${({ padding }) => padding || 0};
	transition: 0.2s;
	background: ${({ background }) => background};
	border-radius: ${({ radius, theme: { borderRadius } }) => borderRadius[radius || "none"]};
`;

export const Column = styled(Row)`
	flex-direction: column;
`;

export const Text = styled.p<IStyles>`
	color: ${({ color }) => color};
	font-size: ${({ fontSize, theme: { fontSizes } }) => fontSizes[fontSize || "none"]};
	transition: 0.2s;
	margin: ${({ margin }) => margin || 0};
	padding: ${({ padding }) => padding || 0};
	word-break: ${({ wordBreak }) => wordBreak};
	font-weight: ${({ weight }) => weight};
	user-select: none;
`;
