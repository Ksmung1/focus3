import React from "react";
import "./FocusTable.css"
function FocusTable() {
          return (
                    <div className="focusTable">
                              <table className="focusTable-table">
                                        <thead>
                                                  <tr>
                                                            <th className="table-cell">Exams</th>
                                                            <th className="table-cell">Course Type</th>
                                                            <th className="table-cell">Status</th>
                                                            <th className="table-cell">Booking</th>
                                                            <th className="table-cell">Course Duration</th>
                                                            <th className="table-cell">Start to End Date</th>
                                                            <th className="table-cell">Subjects Covered</th>
                                                            <th className="table-cell">Administrator</th>                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <td className="table-cell">NDA, CDS, AFCAT, CAPF</td>
                                                            <td className="table-cell">Defence Exams Course</td>
                                                            <td className="table-cell"><p className="in-progress">In progress</p></td>
                                                            <td className="table-cell">Opens</td>
                                                            <td className="table-cell">6 Months</td>
                                                            <td className="table-cell">September 2, 2023 → March 20, 2024</td>
                                                            <td className="table-cell">Maths, English, GK, CA, PT, SSB Interview</td>
                                                            <td className="table-cell">Sir Milestone</td>
                                                  </tr>
                                                  <tr>
                                                            <td className="table-cell">Class 10 Board Exam</td>
                                                            <td className="table-cell">Board Exam Booster Course</td>
                                                            <td className="table-cell "><p className="start-soon">Starting soon</p></td>
                                                            <td className="table-cell">Opens</td>
                                                            <td className="table-cell">3 Months</td>
                                                            <td className="table-cell">November 1, 2023 → January 31, 2024</td>
                                                            <td className="table-cell">Physics, Chemistry, Biology, Maths</td>
                                                            <td className="table-cell">Miss Rose</td>
                                                  </tr>
                                                  <tr>
                                                            <td className="table-cell">Class 12 Board Exam</td>
                                                            <td className="table-cell">Board Exam Booster Course</td>
                                                            <td className="table-cell "><p className="start-soon"> Starting soon</p></td>
                                                            <td className="table-cell">Opens</td>
                                                            <td className="table-cell">3 Months</td>
                                                            <td className="table-cell">Novermber 5, 2023 → January 31, 2024</td>
                                                            <td className="table-cell">Physics, Chemistry, Biology, Maths</td>
                                                            <td className="table-cell">Dr. Snoopy</td>
                                                  </tr>
                                                  <tr>
                                                            <td className="table-cell">NEE & JEE</td>
                                                            <td className="table-cell">Medical & Engineering Crash Course</td>
                                                            <td className="table-cell "><p className="upcoming">Upcoming</p></td>
                                                            <td className="table-cell">Not started</td>
                                                  </tr>
                                                  <tr>
                                                            <td className="table-cell">SSC, Banking, NABARD, RBI</td>
                                                            <td className="table-cell">Banking & SSC Foundation Course</td>
                                                            <td className="table-cell "><p className="upcoming">Upcoming</p></td>
                                                            <td className="table-cell">Not started</td>
                                                  </tr>
                                                  <tr>
                                                            <td className="table-cell">UPSC CSE</td>
                                                            <td className="table-cell">GS Foundation Course</td>
                                                            <td className="table-cell"><p className="upcoming">Upcoming</p></td>
                                                            <td className="table-cell">Not started</td>
                                                  </tr>
                                        </tbody>
                              </table>
                    </div>
          );
}

export default FocusTable;
