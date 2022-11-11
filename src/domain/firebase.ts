// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: import.meta.env["VITE_FIREBASE_KEY"] as string,
	authDomain: "todo-ed1fc.firebaseapp.com",
	databaseURL: "https://todo-ed1fc-default-rtdb.firebaseio.com",
	projectId: "todo-ed1fc",
	storageBucket: "todo-ed1fc.appspot.com",
	messagingSenderId: "385049153898",
	appId: "1:385049153898:web:f54b669d401460f53a9513",
	measurementId: "G-88FVDYK078",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const todosRef = ref(db, "todos");

export { todosRef, db };
