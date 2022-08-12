import React from 'react'
import Check from './Check'
export default function Message(props) {
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
        <textarea className="form-section__textarea-item" />
      </label>
      <div className="form-section__wrapper-check">
        <Check
          className="form-section__wrapper-check__item"
          name="messageCheck"
          type="radio"
        >
          Some cool choice 1
        </Check>
        <Check
          className="form-section__wrapper-check__item"
          name="messageCheck"
          type="radio"
        >
          Some cool choice 2
        </Check>
      </div>
    </div>
  );
}
