import { FORM_EDIT, FORM_LOAD, FORM_VALIDATE, SET_STAGE } from './actionTypes';
import firebase, { db, auth } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';
const initialState = {
  activeStage: 0,
  firstName: '',
  lastName: '',
  date: '',
  email: '',
  address: '',
  message: '',
  messageCheck: '',
  checkBox1: '',
  checkBox2: '',
  isLoading: false,
  validate: {
    email: false,
    emailError: '',
    date: false,
    isChecked: false,
  },
};
export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_EDIT:
      return { ...state, ...action.payload };
    case FORM_LOAD:
      return {
        ...state,
        isLoading: true,
      };
    case FORM_VALIDATE:
      return {
        ...state,
        validate: {...state.validate, ...action.payload},
      };
    case SET_STAGE:
      return {
        ...state,
        activeStage: action.payload,
      };
    default:
      return state;
  }
}

// const getData = async () => {
//   // console.log(firebase);
//   const querySnapshot = await getDocs(collection(db, 'leads'));
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// };

export const setStage = (stage) => {
  return {
    type: SET_STAGE,
    payload: stage,
  };
};

export const formSubmit = (state) => (dispatch) => {
  console.log(state);
  dispatch(formLoad);
  
};

const validateEmailReg = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const validateEmail = (email) => (dispatch) => {
  if (validateEmailReg(email)) {
    signInWithEmailAndPassword(auth, email.trim(), '123').catch((error) => {
      console.log(error.message);
      if (error.message === 'Firebase: Error (auth/user-not-found).') {
        dispatch(setStage(1));
        // return
      }
      if (error.message === 'Firebase: Error (auth/wrong-password).') {
        console.log('here');
        dispatch(emailValidate('exists'));
      }
    });
  } else {
    console.log('fsfas');
    dispatch(emailValidate());
  }
};

const emailValidate = (type) => {
  if (type === 'exists') {
    return {
      type: FORM_VALIDATE,
      payload: {
        validate: {
          email: false,
          isChecked: true,
          emailError: 'Email already exists',
        },
      },
    };
  } else {
    return {
      type: FORM_VALIDATE,
      payload: {
        validate: {
          email: false,
          isChecked: true,
          emailError: 'Email is wrong',
        },
      },
    };
  }
};

export const dateValidate = () => {
  return {
    type: FORM_VALIDATE,
    payload: {
      validate: {
        date: false,
        isChecked: true,
      },
    },
  };
};

export const formValidate = (state) => (dispatch) => {
  dispatch(formLoad);
  if (state.date.trim() === '') {
    // dispatch(dateValidate());
  }
  dispatch(validateEmail(state.email));
};

export const formLoad = () => {
  return {
    type: FORM_LOAD,
  };
};

export const formEdit = (e) => {
  const name = e.target.name;
  return {
    type: FORM_EDIT,
    payload: { [name]: e.target.value },
  };
};
// export const setCount = (count) => ({ type: SET_COUNT, payload: count });
