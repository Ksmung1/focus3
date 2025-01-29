import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CurrentAffairs.css";

function CurrentAffairs() {
          const months = ['October', 'September', 'August', 'July', 'June', 'May', 'April', 'March', 'February', 'January'];
          const setSelectedMonth= useState(null);
          const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
          const navigate = useNavigate();



          const handleMonthClick = (month) => {
                    setSelectedMonth(month);
                    const yearInput = '2023';
                    if (yearInput !== null) {
                              const parsedYear = parseInt(yearInput, 10);
                              if (!isNaN(parsedYear)) {
                                        setSelectedYear(parsedYear);
                                        navigate(`/currentAffairs/${parsedYear}/${month}`);
                              }
                    }
          };

          return (
                    <div className="currentAffairs">
                              <h1 style={{ margin: '30px 0 0 ', fontSize: '25px', color: 'black', fontWeight: '800' }}>Rhau's IAS</h1>
                              <h1 style={{ margin: ' 0 0 30px 0', fontSize: '25px', color: 'black', fontWeight: '700' }}>Current Affairs {selectedYear}</h1>
                              <ul className="months">
                                        {months.map((month, index) => (
                                                  <li key={index} onClick={() => handleMonthClick(month)}>
                                                            {month} 2023                                                </li>
                                        ))}
                              </ul>
                    </div>
          );
}

export default CurrentAffairs;
