import React, { FunctionComponent, HTMLAttributes, ReactNode } from "react";
import * as Styled from "styles/LoadingButton.elements";

interface ILoadingButton extends HTMLAttributes<HTMLButtonElement> {
	isLoading?: boolean;
	text?: string | ReactNode;
	className?: string;
}

const LoadingButton: FunctionComponent<ILoadingButton> = ({
	isLoading,
	className,
	text,
	...props
}: ILoadingButton) => {
	return (
		<Styled.Button className={className} disabled={isLoading} {...props}>
			{isLoading ? <Styled.Loader /> : text}
		</Styled.Button>
	);
};

export default LoadingButton;
