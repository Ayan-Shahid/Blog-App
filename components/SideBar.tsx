import React, { FunctionComponent } from "react";
import * as Styled from "styles/SideBar.elements";
import { RiHome5Fill, RiEditFill, RiHome5Line, RiEditLine } from "react-icons/ri";
import { BsPower } from "react-icons/bs";
import Avatar from "./Avatar";
import { useBoolean } from "utilities/hooks";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

const SideBar: FunctionComponent = () => {
	const { value: home, toggle: toggleHome } = useBoolean();
	const { value: edit, toggle: toggleEdit } = useBoolean();

	const { data, status } = useSession();

	const handleSignOut = () => {
		signOut();
	};

	return (
		<Styled.Wrapper>
			<Avatar
				src={data?.user?.image}
				status={status === "authenticated" ? "online" : "offline"}
				size="2.5rem"
			/>
			<Styled.List>
				<Link passHref href="/">
					<Styled.Icon>
						{home ? <RiHome5Fill onClick={toggleHome} /> : <RiHome5Line onClick={toggleHome} />}
					</Styled.Icon>
				</Link>

				<Link passHref href="/Create">
					<Styled.Icon>
						{edit ? <RiEditFill onClick={toggleEdit} /> : <RiEditLine onClick={toggleEdit} />}
					</Styled.Icon>
				</Link>
				<Styled.Icon>
					<BsPower onClick={handleSignOut} />
				</Styled.Icon>
			</Styled.List>
			<Styled.Icon />
		</Styled.Wrapper>
	);
};

export default SideBar;
