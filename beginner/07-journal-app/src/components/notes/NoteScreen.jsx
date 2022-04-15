import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";

export const NoteScreen = () => {

  const { active: note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title, id } = formValues;

  const dispatch = useDispatch();

  const activeId = useRef( note.id );

  useEffect(() => {
    if ( note.id !== activeId.current ) {
      reset( note );
      activeId.current = note.id;
    }
  }, [note, reset])

  useEffect(() => {
    dispatch( activeNote(formValues.id, { ...formValues }) );
  }, [formValues, dispatch])

  const handleDelete = () => {
    dispatch( startDeleting( id ) );
  };

  return (
    <div className="notes__main-content">
      <NotesAppBar />

      <div className="notes__content">
        <input
          autoComplete="off"
          className="notes__title-input"
          name="title"
          type="text"
          placeholder="Some awesome title"
          value={title}
          onChange={handleInputChange}
        />

        <textarea
          className="notes__textarea"
          placeholder="What happened today?"
          name="body"
          value={body}
          onChange={handleInputChange}
        ></textarea>

        {
          (note.url) &&
            <div className="notes__image">
              <img
                src={ note.url }
                alt="Image"
                />
            </div>
        }
      </div>

      <button
        className="btn btn-danger"
        onClick={ handleDelete }
      >
        Delete
      </button>
    </div>
  )
};
