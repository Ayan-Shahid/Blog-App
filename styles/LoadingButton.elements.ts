import styled from "styled-components";

export const Button = styled.button`
	background: ${({ theme: { colors } }) => colors.primary.default};
	color: ${({ theme: { colors } }) => colors.secondary.default};
	font-size: ${({ theme: { fontSizes } }) => fontSizes.md};
	transition: 0.3s;
	display: flex;
	padding: 1rem;
	border-radius: ${({ theme: { borderRadius } }) => borderRadius.md};
	&:hover {
		background: ${({ theme: { colors } }) => colors.primary.light};
	}
	&:active {
		transform: scale(1.2);
	}
	&:disabled {
		pointer-events: none;
	}
`;

export const Loader = styled.span`
	height: 1.5rem;
	width: 1.5rem;
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
