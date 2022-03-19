import { Dispatch, SetStateAction, useState } from "react";

interface ReturnType {
	value?: boolean;
	setTrue?: () => void;
	setFalse?: () => void;
	toggle?: () => void;
	setValue?: Dispatch<SetStateAction<boolean>>;
}

const useBoolean = (defaultValue?: boolean): ReturnType => {
	const [value, setValue] = useState<boolean>(!!defaultValue);

	const setTrue = () => setValue(true);
	const setFalse = () => setValue(false);
	const toggle = () => setValue((state) => !state);

	return { value, setFalse, setTrue, toggle, setValue };
};

export default useBoolean;
