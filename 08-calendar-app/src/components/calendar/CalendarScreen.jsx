import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

import { Navbar } from '../ui/Navbar';
import { messages } from '../../helpers/calendar-messages-es';
import { CalendarEvent } from './CalendarEvent';
import { CalendarModal } from './CalendarModal';
import { AddNewFab } from '../ui/AddNewFab';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import "moment/locale/es";

import { uiOpenModal } from '../../actions/ui';
import { calendarEventClearActive, calendarEventSetActive, calendarEventStartLoading } from '../../actions/calendarEvent';
import { DeleteEventFab } from '../DeleteEventFab';

moment.locale("es");
const localizer = momentLocalizer(moment);

export const CalendarScreen = () => {

  const dispatch = useDispatch();
  const { events, activeEvent } = useSelector( state => state.calendar );
  const { uid } = useSelector( state => state.auth );

  const [lastView, setlastView] = useState(localStorage.getItem("lastView") || "month");

  useEffect(() => {
    dispatch(calendarEventStartLoading());
  }, [dispatch]);

  const onDoubleClick = () => {
    dispatch(uiOpenModal());
  };

  const onSelectEvent = (e) => {
    dispatch(calendarEventSetActive(e));
  };

  const onViewChange = (e) => {
    setlastView(e);
    localStorage.setItem("lastView", e);
  };

  const onSelectSlot = (e) => {
    dispatch(calendarEventClearActive());
  };

  const eventStyleGetter = (event, start, end, isSelected) => {

    const style = {
      backgroundColor: (uid === event.user._id) ? "#367CF7" : "#465660",
      borderRadius: "0px",
      opacity: 0.8,
      display: "block",
      color: "white"
    };
    return {
      style
    }
  };

  return (
    <div className='calendar-screen'>
      <Navbar />

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        messages={messages}
        eventPropGetter={eventStyleGetter}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelectEvent}
        onView={onViewChange}
        onSelectSlot={onSelectSlot}
        selectable={true}
        view={lastView}
        components={{
          event: CalendarEvent
        }}
      />

      <AddNewFab />
      { (activeEvent) && <DeleteEventFab /> }
      <CalendarModal />
    </div>
  )
};
