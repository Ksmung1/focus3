import React, { useState, useEffect } from "react";

const ReactCalendar = () => {
          const [time, setTime] = useState(new Date());
          const day = time.getDate();
          const month = time.toLocaleString("default", { month: "long" });
          const year = time.getFullYear();
          const hours = time.getHours();
          let greeting = "Good morning";
          if (hours >= 6 && hours < 12) {
                    greeting = "Good morning";
          } else if (hours >= 12 && hours < 17) {
                    greeting = "Good afternoon";
          } else if (hours >= 17 && hours < 20) {
                    greeting = "Good evening";
          } else if (hours >= 20 || hours < 6) {
                    greeting = "Good night";
          } else {
                    greeting = "Hello"; // Default greeting for times not covered
          }


          useEffect(() => {
                    // Update the time every second
                    const interval = setInterval(() => {
                              setTime(new Date());
                    }, 1000);

                    return () => {
                              clearInterval(interval); // Clean up the interval on unmount
                    };
          }, []);

          return (
                    <div className="calendar-container" style={{ marginRight: '60px', paddingBottom: '30px' }}>
                              <h1>
                                        {day} {month} {year}<br /> {time.toLocaleTimeString()}
                                        <br /> <p></p>{greeting}
                              </h1>

                              <h2></h2>
                    </div>
          );
};

export default ReactCalendar;
