import React from 'react'

export default function Message(props) {
  return (
    <div
      className={
        props.active
          ? 'form__content-middle__item active'
          : 'form__content-middle__item'
      }
    >
      Message
    </div>
  );
}
