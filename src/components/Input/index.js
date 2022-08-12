import React from 'react'
import styles from './style.scss'

export default function Input({classname, labelText, errorText, ...props}) {
  return (
    <label className={'form-item ' + classname}>
      {labelText}
      <input className='form-item__input' {...props} />
      <span className='form-item__error'>{errorText}</span>
    </label>
  );
}
