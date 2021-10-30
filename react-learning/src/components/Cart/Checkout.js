import {useRef, useState} from 'react';

import classes from "./Checkout.module.css"

// Helper functions to validate form
const isEmpty = value => value.trim() === '';
const isNotFive = value => value.trim() !== 5;

const Checkout = props => {

  const [formInputValidity, setFormInputValidity] = useState({
    name: true,
    street : true,
    city: true,
    postal: true
  });

  const nameInputRef = useRef()
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostal = postalInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalIsValid = isNotFive(enteredPostal);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormInputValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postal: enteredPostalIsValid
    })

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalIsValid &&
      enteredCityIsValid;



    if (!formIsValid) {
      return
    }
  }

  const nameControlClass = `${classes.control} ${formInputValidity.name ?'' : classes.invalid}`;
  const streetControlClass = `${classes.control} ${formInputValidity.street ?'' : classes.invalid}`
  const postalControlClass = `${classes.control} ${formInputValidity.postal ?'' : classes.invalid}`
  const cityControlClass = `${classes.control} ${formInputValidity.city ?'' : classes.invalid}`

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClass}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formInputValidity.name && <p>Please entry a valid name.</p>}
      </div>
      <div className={streetControlClass}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formInputValidity.street && (
          <p>Please entry a valid street address.</p>
        )}
      </div>
      <div className={postalControlClass}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalInputRef}></input>
        {!formInputValidity.postal && (
          <p>Please entry a valid postal code (5 chracters).</p>
        )}
      </div>
      <div className={cityControlClass}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formInputValidity.city && <p>Please entry a valid city.</p>}
      </div>
      <div className={classes.action}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout
