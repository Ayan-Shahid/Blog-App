import { useState } from "react";

interface ReturnType {
	value?: boolean;
	setTrue?: () => void;
	setFalse?: () => void;
	toggle?: () => void;
}

const useBoolean = (): ReturnType => {
	const [value, setValue] = useState<boolean>(false);

	const setTrue = () => setValue(true);
	const setFalse = () => setValue(false);
	const toggle = () => setValue((state) => !state);

	return { value, setFalse, setTrue, toggle };
};

export default useBoolean;
