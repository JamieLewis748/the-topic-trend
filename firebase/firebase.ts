import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "@/firebaseConfig";

const fb = firebase.initializeApp(firebaseConfig);

export default fb;