import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCDCXPnhuskahfICbApLiPKeT3Aja7TBAo",
  authDomain: "pokemon-game-c5749.firebaseapp.com",
  databaseURL: "https://pokemon-game-c5749-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-c5749",
  storageBucket: "pokemon-game-c5749.appspot.com",
  messagingSenderId: "258264078221",
  appId: "1:258264078221:web:462f97cdb544cce61dcfc4",
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = firebase.database();

export default database;
