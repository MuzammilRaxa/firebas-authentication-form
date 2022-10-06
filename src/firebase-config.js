import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAMlzR4W6U7CK3mKPrl2ae6YovFTHe0t3c",
    authDomain: "firbasestarting.firebaseapp.com",
    projectId: "firbasestarting",
    storageBucket: "firbasestarting.appspot.com",
    messagingSenderId: "419244341302",
    appId: "1:419244341302:web:b22f25cf8cb7b30308c097",
    measurementId: "G-J19P2WF578"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)