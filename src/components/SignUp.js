import React from 'react';
import Input from './Input';
import { useDispatch, useSelector } from 'react-redux';
import { formEdit } from '../redux/form';

export default function SignUp(props) {
  const dispatch = useDispatch();
  const form = useSelector(state => state.form)
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
        <Input
          labelText="First Name"
          name="firstName"
          onChange={(e) => dispatch(formEdit(e))}
        />
        <Input
          labelText="Last Name"
          name="lastName"
          onChange={(e) => dispatch(formEdit(e))}
        />
        <Input
          labelText="Date of birth"
          type="date"
          name="date"
          classname={
            !form.validate.date && form.validate.isChecked ? 'wrong' : ''
          }
          onChange={(e) => dispatch(formEdit(e))}
        />
        <Input
          labelText="Email"
          name="email"
          type="email"
          classname={
            !form.validate.email && form.validate.isChecked ? 'wrong' : ''
          }
          errorText={form.validate.emailError}
          onChange={(e) => dispatch(formEdit(e))}
        />
        <Input
          labelText="Address"
          name="address"
          onChange={(e) => dispatch(formEdit(e))}
        />
      </div>
    </div>
  );
}
