import React from 'react'

export default function Checkbox(props) {
  return (
    <div
      className={
        props.active
          ? 'form__content-middle__item active'
          : 'form__content-middle__item'
      }
    >
      Checkbox
    </div>
  );
}
