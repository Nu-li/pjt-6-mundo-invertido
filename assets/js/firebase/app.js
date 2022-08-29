  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.3/firebase-app.js"
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC1buE3V3X20wosEQnhq1s8uroVHpDs-BQ",
    authDomain: "invertidoprojeto-8da0c.firebaseapp.com",
    projectId: "invertidoprojeto-8da0c",
    storageBucket: "invertidoprojeto-8da0c.appspot.com",
    messagingSenderId: "848458836964",
    appId: "1:848458836964:web:6867dd070c41073e5275f1"
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)
  
  export default app