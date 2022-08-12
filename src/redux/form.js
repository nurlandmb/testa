import { FORM_EDIT } from './actionTypes';

const initialState = {
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
};
export default function formReducer(state = initialState, action) {
  switch (action.type) {
    case FORM_EDIT:
      return { ...state, ...action.payload }
    default:
      return state;
  }
}

export const formSubmit = async () => {};
export const formEdit = (e) => {
  const name = e.target.name;
  return {
    type: FORM_EDIT,
    payload: { [name]: e.target.value },
  };
};
// export const setCount = (count) => ({ type: SET_COUNT, payload: count });
