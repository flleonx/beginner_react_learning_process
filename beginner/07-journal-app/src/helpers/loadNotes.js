import { db } from "../firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export const loadNotes = async ( uid ) => {
  const ref = collection(db, `${ uid }/journal/notes`);
  const notesSnap = await getDocs(ref);
  const notes = [];
  notesSnap.forEach( childSnap => {
    notes.push({
      id: childSnap.id,
      ...childSnap.data()
    });
  });

  return notes;
};
