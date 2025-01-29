import React from "react";
import "./Table.css"
function UpExams() {
          return (
                    <div className="upExams">
                              <h1>UPCOMING EXAMS</h1>
                              <div className="upExams-div">
                                        <table>
                                                  <thead>
                                                            <tr>
                                                                      <th>Exams</th>
                                                                      <th>Apply Date</th>
                                                                      <th>Closing Date</th>
                                                                      <th>Exam Date</th>
                                                                      <th>Age</th>
                                                                      <th>Qualifi- <br />cation</th>
                                                                      <th>Vacancy</th>
                                                                      <th>Salary</th>
                                                            </tr>
                                                  </thead>
                                                  <tbody>
                                                            <tr>
                                                                      <td>IOCL 2023</td>
                                                                      <td>21st Oct</td>
                                                                      <td>20th Nov</td>
                                                                      <td>3rd Dec 2023</td>
                                                                      <td>18-24</td>
                                                                      <td>
                                                                                <ul>
                                                                                          <li>12th pass</li>
                                                                                          <li>ITI</li>
                                                                                          <li>B.sc</li>
                                                                                          <li>Diploma</li>
                                                                                          <li>B.com</li>
                                                                                          <li>BA</li>
                                                                                </ul>
                                                                      </td>
                                                                      <td>1720</td>
                                                                      <td></td>
                                                            </tr>
                                                  </tbody>
                                        </table>
                              </div>

                              <h1 style={{ marginTop: '40px' }}>SSC CALENDAR 2024</h1>
                              <a
                                        href="/pdf/ssc-calendar-2024 (1).pdf"
                                        download
                                        style={{ textDecoration: 'none' }}
                              >
                                        <div style={{ height: '50px', padding: ' 20px 10px', backgroundColor: 'white', borderRadius: '7px', display: 'flex', }}>
                                                  <p style={{ color: 'black', margin: '0', textAlign: 'center' }}>SSC Calendar-2024 <span style={{ fontStyle: 'italic', paddingLeft: '15px', textDecoration: 'underline' }}>Click to download</span></p>
                                        </div>  </a>
                    </div >
          )
}

export default UpExams;