import React from "react";
import "./Syllabus.css"

function Syllabus() {
          return (
                    <div style={{ margin: ' 30px' }}>
                              <table className="bordered-table">
                                        <thead>
                                                  <tr>
                                                            <th>Category</th>
                                                            <th>Syllabus</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <td>Group A<br /> (10th Pass)
                                                                      <ul>
                                                                                <li>Agniveer GD</li>
                                                                                <li>SSC GD</li>
                                                                      </ul>
                                                            </td>
                                                            <td>
                                                                      <ul>
                                                                                <li>GK</li>
                                                                                <li>General English (for SSC GD)</li>
                                                                                <li>Maths (10th standard)</li>
                                                                                <li>Reasoning (for SSC GD)</li>
                                                                      </ul>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td style={{ paddingTop: '20px' }}>Group B<br /> (12th Pass)
                                                                      <ul >
                                                                                <li>NDA & NA</li>
                                                                                <li>ARMY TES</li>
                                                                                <li>Agniveer Technical</li>
                                                                                <li>Agniveer Clerk</li>
                                                                      </ul>
                                                            </td>
                                                            <td>
                                                                      <ul>
                                                                                <li>General Ability Test</li>
                                                                                <li>General English</li>
                                                                                <li>Maths (12th Standard)</li>
                                                                                <li>Physics & Chemistry (Basic class 12 level)</li>
                                                                                <li>JEE Main (for TES)</li>
                                                                      </ul>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td style={{ paddingBottom: '47px' }}>
                                                                      Group C (Graduates)
                                                                      <ul>
                                                                                <li>CDS</li>
                                                                                <li>CAPF</li>
                                                                                <li>AFCAT</li>
                                                                                <li>IB ACIO</li>
                                                                                <li>SSC CPO</li>
                                                                      </ul>
                                                            </td>

                                                            <td>
                                                                      <ul>
                                                                                <li style={{}}>GS, GA, GK</li>
                                                                                <li>General English, Essay and Comprehension for CAPF, IB ACIO & SSC CPO</li>
                                                                                <li>Maths (10th standard)</li>
                                                                                <li>Reasoning (for CAPF, AFCAT, IB ACIO & SSC CPO)</li>
                                                                      </ul>
                                                            </td>
                                                  </tr>
                                        </tbody>
                              </table>
                    </div>
          )
}

export default Syllabus;