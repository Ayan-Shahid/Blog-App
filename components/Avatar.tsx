import React, { FunctionComponent } from "react";
import * as Styled from "styles/Avatar.elements";

interface IAvatar {
	size?: string;
	src?: string | null;
	status?: "offline" | "online";
}

const Avatar: FunctionComponent<IAvatar> = ({ size, src, status }: IAvatar) => {
	return (
		<Styled.Wrapper size={size}>
			<Styled.Picture
				alt="Avatar"
				src={src || "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"}
				layout="fill"
			/>
			{status === "online" ? <Styled.Indicator /> : ""}
		</Styled.Wrapper>
	);
};

export default Avatar;
