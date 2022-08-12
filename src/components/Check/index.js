import React from 'react';
import './check.scss';

export default function index({ children, className, ...props }) {
  return (
    <label className={!!className ? 'container ' + className : 'container'}>
      {children}
      <input {...props} />
      <span className="checkmark"></span>
    </label>
  );
}
