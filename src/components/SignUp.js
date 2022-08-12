import React from 'react'
import Input from './Input';

export default function SignUp(props) {
  return (
    <div
      className={
        props.active
          ? 'form__content-middle__item form-section active'
          : 'form__content-middle__item form-section'
      }
    >
      <p className="form-section__step">Step 1/3</p>
      <h2 className="form-section__title">Sign Up</h2>
      <div className="form-section__wrapper-input">
        <Input labelText="First Name" />
        <Input labelText="Last Name" />
        <Input labelText="Date of birth" type="date" />
        <Input labelText="Email" type="email" />
        <Input labelText="Address" />
      </div>
    </div>
  );
}
