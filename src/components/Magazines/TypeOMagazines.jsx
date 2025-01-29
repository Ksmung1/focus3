import React, { useState } from "react";
import "./Magazines.css";
import pdfFiles from "./pdfFiles";

function PDFViewer() {
          const [selectedMonth, setSelectedMonth] = useState(null);
          const [selectedYear, setSelectedYear] = useState(null);
          const [showYearPopup, setShowYearPopup] = useState(false);

          function handleClick(month) {
                    setSelectedMonth(month);
                    setShowYearPopup(true);
          }

          function handleYearSelect(year) {
                    setSelectedYear(year);
                    setShowYearPopup(false);
          }

          return (
                    <div className="d-flex align-items-center justify-content-center">
                              <button style={{ position: 'fixed', top: '5px', left: '5px' }} onClick={() => { window.location.href = '/magazines' }}>Go back</button>
                              <h1>Magazines</h1>

                              <ul className="months">
                                        {Object.keys(pdfFiles).map((month) => (
                                                  <li key={month} onClick={() => handleClick(month)}>
                                                            {month}
                                                  </li>
                                        ))}
                              </ul>

                              {showYearPopup && selectedMonth && (
                                        <div className="year-popup">
                                                  <h2>Select a Year for {selectedMonth}</h2>
                                                  <ul className="years">
                                                            {Object.keys(pdfFiles[selectedMonth]).map((year) => (
                                                                      <li key={year} onClick={() => handleYearSelect(year)}>
                                                                                {year}
                                                                      </li>
                                                            ))}
                                                  </ul>
                                        </div>
                              )}

                              {selectedYear && selectedMonth && (
                                        <iframe
                                                  className="pdf-content"
                                                  src={pdfFiles[selectedMonth][selectedYear]}
                                                  frameBorder="0"
                                                  title="PDF Viewer"
                                                  width="100%"
                                                  height="500px"
                                        ></iframe>
                              )}
                    </div>
          );
}

export default PDFViewer;
