
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZxpVKCG_k76RL3deTUCoqhYu1lhbuuWE",
  authDomain: "reggina-trattoria.firebaseapp.com",
  projectId: "reggina-trattoria",
  storageBucket: "reggina-trattoria.appspot.com",
  messagingSenderId: "1002967193912",
  appId: "1:1002967193912:web:eb0b5b25aa643fd68dc9cd"
};


const app = initializeApp(firebaseConfig);
export const dataBase = getFirestore(app);