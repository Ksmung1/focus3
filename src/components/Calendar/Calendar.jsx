import React from 'react';
import moment from 'moment';
import './Calendar.css';

function MyCalendar() {
          const currentDate = moment('2023-10-18');
          const currentMonth = currentDate.format('MMMM');
          const currentYear = currentDate.format('YYYY');
          const currentDay = currentDate.format('D');
          const dayOfWeek = currentDate.format('dddd');

          return (
                    <div className="calendar-container">
                              <div className="paper-calendar">
                                        <div className="calendar-header">
                                                  <div className="date-line">
                                                            <div className="date">{currentDay} {currentMonth} {currentYear} {dayOfWeek}</div>
                                                  </div>
                                        </div>
                              </div>
                    </div>
          );
}

export default MyCalendar;
