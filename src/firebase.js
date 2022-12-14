// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_APIKEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASURMENT_ID,
// };
const firebaseConfig = {
  apiKey: 'AIzaSyAMm-AIfV7G3gApWRDc7YnpedPyzxn7YVA',
  authDomain: 'testa-55832.firebaseapp.com',
  projectId: 'testa-55832',
  storageBucket: 'testa-55832.appspot.com',
  messagingSenderId: '863253279321',
  appId: '1:863253279321:web:7d54b51d4fc08508e73748',
  measurementId: 'G-K7L20VGRRZ',
};


// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const db = getFirestore(firebase);
export const auth = getAuth(firebase);
const analytics = getAnalytics(firebase);


export default firebase