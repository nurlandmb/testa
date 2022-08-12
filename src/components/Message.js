import React from 'react'
import Check from './Check'
import { useDispatch } from 'react-redux';
import { formEdit } from '../redux/form';

export default function Message(props) {
  const dispatch = useDispatch();

  return (
    <div
      className={
        props.active
          ? 'form__content-middle__item form-section active'
          : 'form__content-middle__item form-section'
      }
    >
      <p className="form-section__step">Step 2/3</p>
      <h2 className="form-section__title">Message</h2>
      <label className="form-section__textarea">
        Message
        <textarea
          className="form-section__textarea-item"
          name="message"
          onChange={(e) => dispatch(formEdit(e))}
        />
      </label>
      <div className="form-section__wrapper-check">
        <Check
          className="form-section__wrapper-check__item"
          name="messageCheck"
          type="radio"
          value="message-Some cool choice 1"
          onChange={(e) => dispatch(formEdit(e))}
        >
          Some cool choice 1
        </Check>
        <Check
          className="form-section__wrapper-check__item"
          name="messageCheck"
          type="radio"
          value="message-Some cool choice 2"
          onChange={(e) => dispatch(formEdit(e))}
        >
          Some cool choice 2
        </Check>
      </div>
    </div>
  );
}
