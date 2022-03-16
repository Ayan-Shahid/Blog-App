import styled from "styled-components";

export const Wrapper = styled.main`
	display: flex;
	background: ${({ theme: { colors } }) => colors.primary.dark};
	height: 100vh;
	align-items: center;
	padding: 1rem;
`;
