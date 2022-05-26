import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  //*Поставьте свои конфиги
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
