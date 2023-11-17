import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const localValue = localStorage.getItem(key);
    const finalLocalValue = localValue ? JSON.parse(localValue) : initialValue;
    localStorage.setItem(key, JSON.stringify(finalLocalValue));
    return finalLocalValue;
  });
  const setLSHandler = (val) => {
    setValue(val);
    localStorage.setItem(key, JSON.stringify(val));
  };
  return [value, setLSHandler];
};
export default useLocalStorage;
