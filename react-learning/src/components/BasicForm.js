import useBasicInput from "../hooks/basic-input";

const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    hasError: firstInputHasError,
    isValid: enteredFirstIsValid,
    valueChangeHandler: firstChangeHandler,
    inputBlurHandler: firstBlurHandler,
    reset: resetFirstInput
  } = useBasicInput(value => value.trim() !== '');

  const {
    value: enteredLastName,
    hasError: lastInputHasError,
    isValid: enteredLastIsValid,
    valueChangeHandler: lastChangeHandler,
    inputBlurHandler: lastBlurHandler,
    reset: resetLastInput
  } = useBasicInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    isValid: enteredEmailIsValid,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput
  } = useBasicInput(value => value.trim() !== '');

  let formIsValid = false;

  if(enteredFirstIsValid && enteredLastIsValid && enteredEmailIsValid ) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if(!enteredFirstIsValid || !enteredLastIsValid || !enteredEmailIsValid) {
      return;
    }
    resetFirstInput();
    resetLastInput();
    resetEmailInput();
  }

  const firstInputClass = firstInputHasError
  ? 'form-control invalid'
  : 'form-control'

  const lastInputClass = lastInputHasError
  ? 'form-control invalid'
  : 'form-control'

  const emailInputClass = emailInputHasError
  ? 'form-control invalid'
  : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className="control-group">
        <div className={firstInputClass}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
            value={enteredFirstName}
          />
          {firstInputHasError && (<p className="error-text">First name must not be empty</p>)}
        </div>
        <div className={lastInputClass}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
            value={enteredLastName}
          />
        </div>
        {lastInputHasError && (<p className="error-text">Last name must not be empty</p>)}
      </div>
      <div className={emailInputClass}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (<p className="error-text">Please enter a valid email</p>)}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
