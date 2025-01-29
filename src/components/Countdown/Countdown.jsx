import React, { useState, useEffect } from 'react';

function CountdownTimer() {
          const targetDate = new Date('2023-12-01T00:00:00').getTime();
          const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

          useEffect(() => {
                    const interval = setInterval(() => {
                              const updatedTimeLeft = calculateTimeLeft(targetDate);
                              setTimeLeft(updatedTimeLeft);

                              if (updatedTimeLeft.total <= 0) {
                                        clearInterval(interval);
                              }
                    }, 1000);

                    return () => clearInterval(interval);
          }, [targetDate]);

          function calculateTimeLeft(targetDate) {
                    const now = new Date().getTime();
                    const timeDifference = targetDate - now;

                    if (timeDifference <= 0) {
                              return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
                    }

                    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

                    return { days, hours, minutes, seconds, total: timeDifference };
          }

          return (
                    <div style={{ margin: ' 20px 30px 0', color: 'red', backgroundColor: 'white', padding: '1px', borderRadius: '5px', textAlign: 'center' }}>
                              <h1>Booking Ends:</h1>
                              <div className="countdown" >
                                        <div>
                                                  <h1>
                                                            <span>{timeLeft.days}</span> Days
                                                            <span> {timeLeft.hours}</span> Hours
                                                            <span> {timeLeft.minutes}</span> Minutes
                                                            <span> {timeLeft.seconds}</span> Seconds
                                                  </h1>
                                        </div>

                              </div>
                    </div>
          );
}

export default CountdownTimer;
