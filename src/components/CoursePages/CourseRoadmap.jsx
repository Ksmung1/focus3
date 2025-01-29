import React from "react";

function CourseRoadmap () {
                    // CSS Styles
                    const tableHeaderStyle = {
                              border: "1px solid #000",
                              textAlign: "center",
                              padding: '5px',
                              color: 'black',
                              backgroundColor: 'white'
                    };
          
                    const tableCellStyle = {
                              border: "1px solid #000",
                              textAlign: "left", paddingLeft: '20px'
          
                    };
                    const tableCellStyle1 = {
                              border: "1px solid #000",
                              textAlign: "left", paddingLeft: '20px',
                              width: '300px'
          
                    };
          
                    const liStyle = {
                              marginBottom: '5px',
                    };
                    
          
          
          return (
                    <div style={{ margin: '30px', }}>
                    <h1 style={{ fontSize: '1.5rem', color: "#fe5a1d", textDecoration: 'upperCase', fontWeight: '800' }}>6 MONTHS COURSE ROADMAP</h1>
                    <p style={{ color: '#fff' }}>(October 2024 - March 2025) <br /> Ongoing⚙️🚀</p>
                    <div style={{ overflowX: 'scroll', margin: 'px', border: '1px solid black' }}>
                              <table style={{ borderCollapse: "collapse", width: "590px", backgroundColor: 'white', color: 'black' }}>
                                        <thead>
                                                  <tr>
                                                            <th style={tableHeaderStyle}>MONTH</th>
                                                            <th style={tableHeaderStyle}>FOCUS</th>
                                                            <th style={tableHeaderStyle}>CHECKLIST</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <td style={tableCellStyle}>
                                                                      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                                                                                
                                                                                <li style={liStyle}>October</li>
                                                                                <li style={liStyle}>November 2024</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle}>Building Strong Foundations
                                                                      <ul style={{ margin: "10px", padding: "0" }}>
                                                                                <li style={liStyle}>Syllabus: Maths, GK, English, Reasoning & Current Affairs</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle1}>
                                                                      <ul style={{ margin: "0", padding: "0" }}>
                                                                                <li style={liStyle}>Finish all relevant basic concepts in 90 days</li>
                                                                                <li style={liStyle}>Quizzes</li>
                                                                                <li style={liStyle}>Read Newspapers Every day</li>
                                                                                <li style={liStyle}>Current Affairs Till October 2024</li>
                                                                      </ul>
                                                            </td>

                                                  </tr>
                                                  <tr>
                                                            <td style={tableCellStyle}>
                                                                      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                                                                                <li style={liStyle}>December 2024</li>
                                                                                <li style={liStyle}>January 2025</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle}>Comprehensive Preparations:
                                                                      <ul style={{ margin: "10px", padding: "0" }}>
                                                                                <li style={liStyle}>Comprehensive coverage of all exam-related topics</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle1}>
                                                                      <ul style={{ margin: '0', padding: '0' }}>
                                                                                <li style={liStyle}>Complete the Syllabus</li>
                                                                                <li style={liStyle}>Solve Previous Years Questions</li>
                                                                                <li style={liStyle}>Personality Development</li>
                                                                                <li style={liStyle}>Read Newspapers Every day</li>
                                                                                <li style={liStyle} >Current Affairs Till November 2024</li>
                                                                      </ul>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td style={tableCellStyle}>
                                                                      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                                                                                <li style={liStyle}>February 2025</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle}>Polishing for Excellence
                                                                      <ul style={{ margin: "10px", padding: "0" }}>
                                                                                <li style={liStyle}>Performance Analysis</li>
                                                                                <li style={liStyle}>Interview Preparation</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle1}>
                                                                      <ul style={{ margin: '0', padding: '0' }}>

                                                                                <li style={liStyle}>Revision</li>
                                                                                <li style={liStyle}>Regular Mock Tests</li>
                                                                                <li style={liStyle}>Read Newspapers Every day</li>
                                                                                <li style={liStyle}>Current Affairs till January 2025</li>
                                                                      </ul>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td style={tableCellStyle}>
                                                                      <ul style={{ listStyle: "none", margin: "0", padding: "0" }}>
                                                                                <li style={liStyle}>March 2025</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle}>Final Review and Refinement
                                                                      <ul style={{ margin: "10px", padding: "0" }}>
                                                                                <li style={liStyle}>Final assessments</li>
                                                                      </ul>
                                                            </td>
                                                            <td style={tableCellStyle1}>
                                                                      <ul style={{ margin: '0', padding: '0' }}>
                                                                                <li style={liStyle}>Final Assessments</li>
                                                                                <li style={liStyle}>Final Revision</li>
                                                                                <li style={liStyle}>Read Newspapers Every day</li>
                                                                                <li style={liStyle}>Current Affairs till March 2024</li>
                                                                                <li style={liStyle}>Exam Day Preparation</li>
                                                                      </ul>
                                                            </td>
                                                  </tr>
                                        </tbody>
                              </table>
                    </div>
          </div>
          )
}

export default CourseRoadmap;