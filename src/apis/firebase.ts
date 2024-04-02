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
  apiKey: '***REMOVED***',
  authDomain: '***REMOVED***',
  databaseURL: '***REMOVED***',
  projectId: '***REMOVED***',
  storageBucket: '***REMOVED***.appspot.com',
  messagingSenderId: '***REMOVED***',
  appId: '1:***REMOVED***:web:94d39e329aa237d077505d',
  measurementId: '***REMOVED***',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export async function login(): Promise<User | null> {
  return signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => {
      console.error(error);
      return null;
    });
}

export async function logout() {
  return signOut(auth)
    .then(() => null)
    .catch(console.error);
}

export async function onUserStateChange(
  callback: (user: User | null) => void
): Promise<void> {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
