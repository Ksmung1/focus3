import React, { useState, useEffect } from 'react';

function DigitalClock() {
          const [time, setTime] = useState(new Date());

          useEffect(() => {
                    const interval = setInterval(() => {
                              setTime(new Date());
                    }, 1000);

                    return () => clearInterval(interval);
          }, []);

          const hours = time.getHours();
          const isPM = hours >= 12;
          const amPM = isPM ? 'PM' : 'AM';
          const displayHours = (hours % 12 || 12).toString().padStart(2, '0');
          const minutes = time.getMinutes().toString().padStart(2, '0');
          const seconds = time.getSeconds().toString().padStart(2, '0');

          return (
                    <div className="digital-clock">
                              <div className="time">
                                        🕰️ {displayHours}:{minutes}:{seconds} {amPM}
                              </div>
                    </div>
          );
}

export default DigitalClock;
