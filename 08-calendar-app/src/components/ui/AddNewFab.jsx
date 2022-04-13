import { useDispatch } from 'react-redux';

import { uiOpenModal } from '../../actions/ui';
import { calendarEventClearActive } from '../../actions/calendarEvent';

export const AddNewFab = () => {

  const dispatch = useDispatch();

  const handleAddCalendarEvent = () => {
    dispatch(calendarEventClearActive());
    dispatch(uiOpenModal());
  };

  return (
    <button
      className="btn btn-primary fab"
      onClick={handleAddCalendarEvent}
    >
      <i className="fas fa-plus"></i>
    </button>
  )
};
