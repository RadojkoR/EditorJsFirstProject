
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAUy5WWteDd8LvPJIYoZ3hlTnesUNhA5ek",
    authDomain: "editorjs-first-app.firebaseapp.com",
    databaseURL: "https://editorjs-first-app-default-rtdb.firebaseio.com",
    projectId: "editorjs-first-app",
    storageBucket: "editorjs-first-app.appspot.com",
    messagingSenderId: "547209183179",
    appId: "1:547209183179:web:449896f7409e21d999404e"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export default app;