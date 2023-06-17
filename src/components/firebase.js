import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgrZz-bgUX2-Gq3MjXgChMizRIHmEmFjg",
  authDomain: "orbit-banking.firebaseapp.com",
  projectId: "orbit-banking",
  storageBucket: "orbit-banking.appspot.com",
  messagingSenderId: "642305568",
  appId: "1:642305568:web:2e05e5d9a639156247f645",
  measurementId: "G-WXPYBPW7NH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export const addUser = ([name, accountNo, balance]) => {
  return db
    .collection("users")
    .add({ name: name, accountNo: accountNo, balance: balance });
};

export const addTransaction = (amount, to, from) => {
  return db
    .collection("transactions")
    .add({ amount: amount, to: to, from: from, createdAt: firebase.firestore.FieldValue.serverTimestamp() });
};

export const transact = (id1, balance1, id2, balance2, amount) => {
  return [db.collection("users").doc(id1).update({
    balance: Number(balance1) - Number(amount)
  }),
  db.collection("users").doc(id2).update({
    balance: Number(balance2) + Number(amount)
  })]

}

export { db };
