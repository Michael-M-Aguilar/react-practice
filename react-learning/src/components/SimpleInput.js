import {useState} from 'react';

const SimpleInput = (props) => {
  // const nameInputRef = useRef()
  const [enteredName, setEnteredName] = useState('')
  const [enteredNameTouch, setEnteredNameTouch] = useState(false)

  // useEffect(() => {
  //   if(enteredNameIsValid) {
  //     console.log('Name input is valid')
  //   }
  // }, [enteredNameIsValid])

  const enteredNameIsValid = enteredName.trim() !== '';
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouch;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);

  }

  const nameInputBlurHandler = event =>{
    setEnteredNameTouch(true);
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    setEnteredNameTouch(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // Logic for using Ref
    // const enteredValue = nameInputRef.current.value;
    // console.log(enteredValue)

    setEnteredName('');
    setEnteredNameTouch(false);
  };

  const nameInputClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          // Assigned nameInputRef using the useRef() method.
          // ref={nameInputRef}
          type="text"
          id="name"
          onChange={nameInputChangeHandler}
          onBlur={nameInputBlurHandler}
          value={enteredName}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Name must not be empty</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
