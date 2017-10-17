const config = {
    apiKey: "AIzaSyCr7i-JThPGLowr-UHObWSIOr7kn8NOMwQ",
    authDomain: "database-test-eddc2.firebaseapp.com",
    databaseURL: "https://database-test-eddc2.firebaseio.com",
    projectId: "database-test-eddc2",
    storageBucket: "database-test-eddc2.appspot.com",
    messagingSenderId: "968745566172"
  };

  const firebase = require('firebase');
  firebase.initializeApp(config);
  const database = firebase.database();
  const auth = firebase.auth();

  const writeUserData = (userId, name, email) => {
    database.ref('users/' + userId).set({
      username: name,
      email: email
    }).then( () => console.log('Succesfully saved on Firebase') );
  }

  const readUser = () => {
    const url = '/users';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
  };

  const registerUser = () => {
    auth.createUserWithEmailAndPassword("email@hotmail.com", "1365659865").catch(function(error) {
      let errorCode = error.code;
      let errorMessage = error.message;
      console.log(errorMessage);
    });
  }

  // registerUser();

module.exports = {
    writeUserData : writeUserData,
    readOnce : readUser,
    registerUser : registerUser
}