import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useEffect, useState } from 'react';
import InitializeAuthentication from '../Components/Firebase/Firebase.init';

InitializeAuthentication();

const UseFirebase = () => {
  const auth = getAuth();

  const [user, setUser] = useState();
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);

  //Sign in with google
  const signInWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch((error) => setError(error.message));
  };

  return {
    signInWithGoogle,
    HandleSignOut,
    error,
    setError,
    user,
    setUser,
    isLoading,
    setIsLoading,
  };
};

export default UseFirebase;
