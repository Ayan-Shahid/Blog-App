import styled from "styled-components";

export const Wrapper = styled.article`
	width: 100%;
	padding: 2rem 0;
	gap: 1.5rem;
	border-bottom: 1px solid ${({ theme: { colors } }) => colors.secondary.default};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;
