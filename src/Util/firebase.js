import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAk90HlqZmOfEZnTdr6JOQoP1pl-hq6dAk",
  authDomain: "homework-bdaf4.firebaseapp.com",
  databaseURL: "https://homework-bdaf4-default-rtdb.firebaseio.com",
  projectId: "homework-bdaf4",
  storageBucket: "homework-bdaf4.appspot.com",
  messagingSenderId: "216463964469",
  appId: "1:216463964469:web:bcc51556ac65423136347c",
  measurementId: "${config.measurementId}"
};
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export default database;
