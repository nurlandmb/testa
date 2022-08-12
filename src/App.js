import firebase, { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
// const db = firebase.firestore();
const getData = async () => {
  // console.log(firebase);
  const querySnapshot = await getDocs(collection(db, 'leads'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

function App() {
  useEffect(() => {
    getData();
  }, [])
  
  return (
    <div className="App">
      Working
    </div>
  );
}

export default App;
