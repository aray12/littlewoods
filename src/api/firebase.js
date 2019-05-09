import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAbhWkYsn8TfU2BiBCaPF0bvkVeDE-esKo',
  authDomain: 'mazer-cb562.firebaseapp.com',
  databaseURL: 'https://mazer-cb562.firebaseio.com/',
};

export default (!firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app());
