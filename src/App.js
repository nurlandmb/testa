import firebase, { db } from './firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Checkbox from './components/Checkbox';
import Message from './components/Message';
import SignUp from './components/SignUp';
// const db = firebase.firestore();
const getData = async () => {
  // console.log(firebase);
  const querySnapshot = await getDocs(collection(db, 'leads'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
};

function App() {
  let [activeStage, setActiveStage] = useState(0)
  return (
    <section className="App">
      <div className="form">
        <div className="form__img"></div>
        <div className="form__content">
          <div className="form__content-top">
            <p className="form__content-top__item">
              <span>1</span>
              Sign Up
            </p>
            <p className="form__content-top__item">
              <span>2</span>
              Message
            </p>
            <p className="form__content-top__item">
              <span>3</span>
              Checkbox
            </p>
          </div>
          <div className="form__content-middle">
            <Checkbox active={activeStage === 0} />
            <Message active={activeStage === 1} />
            <SignUp active={activeStage === 2} />
          </div>
          <div className="form__content-bottom">
            <button className="form__content-bottom__item">Back</button>
            <button className="form__content-bottom__item" onClick={() => setActiveStage(++activeStage)}>Next Step</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
