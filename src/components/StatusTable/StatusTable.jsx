import React from "react";

function StatusTable() {
          return (
                    <div style={{ margin: '29px' }}>
                              <table style={{ borderCollapse: "collapse", width: "100%", backgroundColor: 'white', color: 'black' }}>
                                        <thead>
                                                  <tr>
                                                            <th style={cellStyle}>Subject</th>
                                                            <th style={cellStyle}>Class</th>
                                                            <th style={cellStyle}>Test Series</th>
                                                            <th style={cellStyle}>PYQ</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <td style={cellStyle}>Mathematics</td>
                                                            <td style={cellStyle}>Ongoing</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>
                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Biology/Life Science</td>
                                                            <td style={cellStyle}>Completed</td>
                                                            <td style={cellStyle}>1+1+</td>
                                                            <td style={cellStyle}></td>
                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Physics</td>
                                                            <td style={cellStyle}>Ongoing</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>
                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Chemistry</td>
                                                            <td style={cellStyle}>Ongoing</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>
                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>English</td>
                                                            <td style={cellStyle}>Ongoing</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>
                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>History</td>
                                                            <td style={cellStyle}>Starting soon</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>


                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Indian Polity</td>
                                                            <td style={cellStyle}>January 2025</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>


                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Geography</td>
                                                            <td style={cellStyle}>January 2025</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>


                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Economics</td>
                                                            <td style={cellStyle}>February 2025</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>


                                                  </tr>
                                                  <tr>
                                                            <td style={cellStyle}>Current Affairs</td>
                                                            <td style={cellStyle}>February 2025</td>
                                                            <td style={cellStyle}></td>
                                                            <td style={cellStyle}></td>
                                                  </tr>
                                        </tbody>
                              </table>
                    </div>
          );
}

const cellStyle = {
          border: "1px solid #000",
          padding: "8px 4px",
          fontSize: '12px',
          textAlign: 'center',
          fontWeight: '700',
};

// Dynamically modify the background color based on cell content
const completedColor = "green";
const defaultColor = "gray";

StatusTable.defaultProps = {
          getBackgroundColor: (cellContent) => (cellContent === "Completed" ? completedColor : defaultColor),
};

export default StatusTable;
