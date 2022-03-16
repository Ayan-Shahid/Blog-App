import React, { FunctionComponent } from "react";
import * as Styled from "styles/Avatar.elements";

interface IAvatar {
	size?: string;
}

const Avatar: FunctionComponent<IAvatar> = ({ size }: IAvatar) => {
	return (
		<Styled.Wrapper size={size}>
			<Styled.Picture
				alt="Avatar"
				src="https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
				layout="fill"
			/>
			<Styled.Indicator />
		</Styled.Wrapper>
	);
};

export default Avatar;
