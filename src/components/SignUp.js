import React from 'react';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { formEdit } from '../redux/form';

export default function SignUp(props) {
  const dispatch = useDispatch();

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
        <Input
          labelText="Email"
          name="email"
          type="email"
          onChange={(e) => dispatch(formEdit(e))}
        />
        <Input labelText="Address" />
      </div>
    </div>
  );
}
