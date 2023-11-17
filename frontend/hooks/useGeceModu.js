import useLocalStorage from "./useLocalStorage";

const useGeceModu = (initialMode) => {
  const [geceModu, setGeceModu] = useLocalStorage("geceModu", initialMode);
  const toggleMode = (e) => {
    setGeceModu(!geceModu);
  };
  return [geceModu, toggleMode];
};
export default useGeceModu;
