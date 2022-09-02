import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyBOROTtV-eYAnfNcJ442I22YhofHloCDEM",
    authDomain: "powermaxmarket-eadc1.firebaseapp.com",
    projectId: "powermaxmarket-eadc1",
    storageBucket: "powermaxmarket-eadc1.appspot.com",
    messagingSenderId: "464084192779",
    appId: "1:464084192779:web:ecbe18d99f1ee9e4fc410e"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth= firebase.auth();

  export{auth}