import { useState } from 'react';
import Checkbox from './components/Checkbox';
import Message from './components/Message';
import SignUp from './components/SignUp';
import CheckIco from './img/check.svg';
import './components/style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { formSubmit, formValidate, setStage } from './redux/form';
import Success from './components/Success';

function App() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  const handleStage = () => {
    if (form.activeStage === 0) {
      dispatch(formValidate(form));
      return;
    }
    if (form.activeStage < 2) {
      dispatch(setStage(form.activeStage + 1));
      return;
    }
    dispatch(formSubmit(form));
  };
  return (
    <section className="App">
      <div className="form">
        <div className="form__img">
          <img src="https://wallpaper.dog/large/10765266.jpg" alt="img" />
        </div>
        <div className="form__content">
          <div className="form__content-top">
            <p
              className={
                form.activeStage === 0
                  ? 'form__content-top__item active'
                  : 'form__content-top__item'
              }
            >
              <span>{form.activeStage > 0 ? <img src={CheckIco} /> : '1'}</span>
              Sign Up
            </p>
            <p
              className={
                form.activeStage === 1
                  ? 'form__content-top__item active'
                  : 'form__content-top__item'
              }
            >
              <span>{form.activeStage > 1 ? <img src={CheckIco} /> : '2'}</span>
              Message
            </p>
            <p
              className={
                form.activeStage === 2
                  ? 'form__content-top__item active'
                  : 'form__content-top__item'
              }
            >
              <span>{form.activeStage > 2 ? <img src={CheckIco} /> : '3'}</span>
              Checkbox
            </p>
          </div>
          <div className="form__content-middle">
            <SignUp active={form.activeStage === 0} />
            <Message active={form.activeStage === 1} />
            <Checkbox active={form.activeStage === 2} />
            <Success active={form.sendSuccess} />
          </div>
          <div className="form__content-bottom">
            {form.activeStage > 0 && (
              <button
                className="form__content-bottom__item white"
                onClick={() => dispatch(setStage(form.activeStage - 1))}
                disabled={form.isLoading}
              >
                Back
              </button>
            )}
            <button
              className="form__content-bottom__item"
              onClick={handleStage}
              disabled={form.isLoading}
            >
              {form.activeStage === 2 ? 'Submit' : 'Next Step'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
