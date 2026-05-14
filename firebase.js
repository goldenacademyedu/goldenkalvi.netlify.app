import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCX4cWpNiisavu8maI3E-cQfkSt_9QxYhQ",
  authDomain: "golden-academy-24509.firebaseapp.com",
  projectId: "golden-academy-24509",
  storageBucket: "golden-academy-24509.firebasestorage.app",
  messagingSenderId: "11755509981",
  appId: "1:11755509981:web:9579d7637c15867b786334",
  measurementId: "G-2CNR8YXTMM"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
