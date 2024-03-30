import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js'
import { 

  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  sendEmailVerification 

} from 'https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js'



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDulXP38o1PDMdQeM2-KvLmr6KyHsU7kpI",
  authDomain: "proyectologin-c5dd5.firebaseapp.com",
  projectId: "proyectologin-c5dd5",
  storageBucket: "proyectologin-c5dd5.appspot.com",
  messagingSenderId: "836599007275",
  appId: "1:836599007275:web:7ea1107f57cb145db5826e"
};



const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export const registerauth = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password)


export const verification = () =>
  sendEmailVerification(auth.currentUser)


export const loginauth = (email, password) =>
  signInWithEmailAndPassword(auth, email, password)


export const googleauth = (provider) =>
  signInWithPopup(auth, provider)


export function userstate(){
  onAuthStateChanged(auth, (user) => {
    if (user) {

      const uid = user.uid;
      console.log(uid)

    } else {
      window.location.href='../Index.html'
    }
  });
}


export const loginout = () =>
  signOut(auth)

