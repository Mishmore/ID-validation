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

  function writeUserData(userId, name, email) {
    database.ref('users/' + userId).set({
      username: name,
      email: email
    });
  }

  const readUser = () => {
    const url = '/users';
    return database.ref(url).once('value').then(function(snapshot) {
      return snapshot.val();
    });
};

module.exports = {
    writeUserData : writeUserData,
    readOnce : readUser
}