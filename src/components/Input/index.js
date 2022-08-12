import React from 'react'
import styles from './style.scss'

export default function Input({classname, labelText, errorText, ...props}) {
  return (
    <label className={classname ? 'form-item ' + classname : 'form-item'}>
      {labelText}
      <input className='form-item__input' {...props} />
      <span className='form-item__error'>{errorText}</span>
    </label>
  );
}
