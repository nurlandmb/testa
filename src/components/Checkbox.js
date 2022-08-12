import React from 'react';
import Check from './Check';
export default function Checkbox(props) {
  return (
    <div
      className={
        props.active
          ? 'form__content-middle__item active'
          : 'form__content-middle__item'
      }
    >
      <p className="form-section__step">Step 3/3</p>
      <h2 className="form-section__title">Checkbox</h2>
      <div className="form-section__check">
        <label className="form-section__check-item">
          <input type="radio" name="check1" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              height="25px"
              width="25px"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>
          </span>
        </label>
        <label className="form-section__check-item">
          <input type="radio" name="check1" />
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25px"
              width="25px"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </span>
        </label>
      </div>
      <div className="form-section__wrapper-check">
        <Check
          className="form-section__wrapper-check__item"
          name="checkboxCheck"
          type="radio"
        >
          Some cool choice with veeeeeeeeeery long description
        </Check>
        <Check
          className="form-section__wrapper-check__item"
          name="checkboxCheck"
          type="radio"
        >
          Some cool choice 2
        </Check>
      </div>
    </div>
  );
}
