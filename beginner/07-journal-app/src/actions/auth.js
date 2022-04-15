import Swal from 'sweetalert2'
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { auth, googleAuthProvider } from "../firebase/firebaseConfig";
import { types } from "../types/types";
import { finishLoading, startLoading } from './ui';
import { noteLogout } from './notes';

export const startLoginEmailPassword = ( email, password ) =>{
  return async (dispatch) => {
    try {
      dispatch( startLoading() );
      const { user } = await signInWithEmailAndPassword( auth, email, password );
      dispatch( login( user.uid, user.displayName ) );
      dispatch( finishLoading() );
    } catch (error) {
      dispatch( finishLoading() );
      Swal.fire("Error", error.message, "error");
      console.log(error);
    }
  };
};

export const startRegisterWithEmailPasswordName = (name, email, password) => {
  return async ( dispatch ) => {
    try {
      const { user } = await createUserWithEmailAndPassword( auth, email, password );
      await updateProfile( user, { displayName: name });
      dispatch( login(user.uid, user.displayName) );
    } catch (error) {
      Swal.fire("Error", error.message, "error");
      console.log(error);
    }
  };
};

export const startGoogleLogin = () => {
  return async ( dispatch ) => {
    const { user } = await signInWithPopup( auth, googleAuthProvider );
    dispatch( login( user.uid, user.displayName ));
  };
};

export const login = (uid, displayName) => ({
  type: types.login,
  payload: {
    uid,
    displayName
  }
});

export const startLogout = () => {
  return async ( dispatch ) => {
    await signOut( auth );
    dispatch( logout() );
    dispatch( noteLogout() );
  };
};

export const logout = () => ({
  type: types.logout
});
