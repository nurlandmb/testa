import firebase, { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Checkbox from './components/Checkbox';
import Message from './components/Message';
import SignUp from './components/SignUp';
import CheckIco from './img/check.svg'
import './components/style.scss'
import { useDispatch, useSelector } from 'react-redux';

const getData = async () => {
  // console.log(firebase);
  const querySnapshot = await getDocs(collection(db, 'leads'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

function App() {
  const dispatch = useDispatch();
  const form = useSelector((state) => state.form);
  console.log(form);
  let [activeStage, setActiveStage] = useState(0)
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
                activeStage === 0
                  ? 'form__content-top__item active'
                  : 'form__content-top__item'
              }
            >
              <span>{activeStage > 0 ? <img src={CheckIco} /> : '1'}</span>
              Sign Up
            </p>
            <p
              className={
                activeStage === 1
                  ? 'form__content-top__item active'
                  : 'form__content-top__item'
              }
            >
              <span>{activeStage > 1 ? <img src={CheckIco} /> : '2'}</span>
              Message
            </p>
            <p
              className={
                activeStage === 2
                  ? 'form__content-top__item active'
                  : 'form__content-top__item'
              }
            >
              <span>{activeStage > 2 ? <img src={CheckIco} /> : '3'}</span>
              Checkbox
            </p>
          </div>
          <div className="form__content-middle">
            <SignUp active={activeStage === 0} />
            <Message active={activeStage === 1} />
            <Checkbox active={activeStage === 2} />
          </div>
          <div className="form__content-bottom">
            {
              activeStage > 0 && 
            <button
              className="form__content-bottom__item white"
              onClick={() => setActiveStage(--activeStage)}
            >
              Back
            </button>
            }
            <button
              className="form__content-bottom__item"
              onClick={() => setActiveStage(++activeStage)}
            >
              {
                activeStage === 2 ? 'Submit' : 'Next Step'
              }
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
