import { useDispatch } from 'react-redux';

import { calendarEventStartDelete } from '../actions/calendarEvent';

export const DeleteEventFab = () => {

  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(calendarEventStartDelete());
  };

  return (
    <button
      className="btn btn-danger fab-danger"
      onClick={handleDelete}
    >
      <i className="fas fa-trash"></i>
      <span> Eliminar evento</span>
    </button>
  )
};
