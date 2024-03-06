import { useState, ChangeEvent } from "react";
import { ITest } from "./interface";

const useInput = (initialValue: ITest) => {
  const [value, setValue] = useState<ITest>(initialValue);

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const onChangeTextAreaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const reset = () => {
    setValue(initialValue);
  };

  return { value, onChangeHandler, onChangeTextAreaHandler, reset };
};

export default useInput;
