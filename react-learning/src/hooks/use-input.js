import { useReducer } from "react";

  const initialInputState = {
    value: "",
    isTouched: false,
  };

const inputStateReducer = (state, action) => {
  return inputStateReducer
};
const useInput = (validateValue) => {

  const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState);

  // const [enteredValue, setEnteredValue] = useState("");
  // const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

   const valueChangeHandler = (event) => {
     dispatch({type: 'INPUT', value: event.target.value});
    //  setEnteredValue(event.target.value);
   };
   const inputBlurHandler = (event) => {
     setIsTouched(true);
   };

    const reset = () => {
      setEnteredValue("");
      setIsTouched(false);
    };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset
  }
}

export default useInput
