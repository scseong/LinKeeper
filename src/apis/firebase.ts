import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCDWgmS_4rL9omTGGDd8D5kxM8_Xx0rE_0',
  authDomain: 'mybestproject-a988b.firebaseapp.com',
  databaseURL: 'https://mybestproject-a988b-default-rtdb.firebaseio.com',
  projectId: 'mybestproject-a988b',
  storageBucket: 'mybestproject-a988b.appspot.com',
  messagingSenderId: '851743278568',
  appId: '1:851743278568:web:94d39e329aa237d077505d',
  measurementId: 'G-K05HD2FP73',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

export function logout() {
  signOut(auth).catch(console.error);
}

export function onUserStateChange(callback: (user: User | null) => void) {
  onAuthStateChanged(auth, callback);
}
