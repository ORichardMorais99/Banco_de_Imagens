
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDvyb40RGux4KDatwhhGKwBypwGM_MERVU",
  authDomain: "reactuploads-94a44.firebaseapp.com",
  projectId: "reactuploads-94a44",
  storageBucket: "reactuploads-94a44.appspot.com",
  messagingSenderId: "742666717252",
  appId: "1:742666717252:web:f116a5be1ffcf15e22d411",
  measurementId: "G-6CQDHWZM4H"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
