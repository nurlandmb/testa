import React from 'react'

export default function Success({active}) {
  return (
    <div
      className={
        active
          ? 'form__content-middle__item success active'
          : 'form__content-middle__item success'
      }
    >
      Success
    </div>
  );
}
