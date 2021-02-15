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

export class Firebase {
  constructor() {
    this.fire = firebase;
    this.database = this.fire.database();
  }

  getPokemonSocket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val());
    });
  };

  offPokemonSocket = () => {
    this.database.ref("pokemons").off();
  };

  // getPokemonsOnce = async () => {
  //   return await this.database
  //     .ref("pokemons")
  //     .once("value")
  //     .then((snapshot) => Object.entries(snapshot.val()));
  // };

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon);
  };

  addPokemon = (data, cb) => {
    const newKey = this.database.ref().child("pokemons").push().key;
    this.database
      .ref("pokemons/" + newKey)
      .set(data)
      .then(() => cb());
  };
}
