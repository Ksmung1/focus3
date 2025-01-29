import React from "react";
import { Link } from "react-router-dom";
import './ExamTable.css';

function ExamTable() {
          return (
                    <div>
                              <h1 style={{
                                        margin: '0px 0 30px', fontSize: '1.5rem',  color: "#fe5a1d", fontWeight: '700'
                              }}>EXAM PATTERN</h1>
                              < table className="exam-table" >
                                        <thead>
                                                  <tr>
                                                            <th>Group A (10th Pass)</th>
                                                            <th>Group B (12th Pass)</th>
                                                            <th>Group C (Graduates)</th>
                                                  </tr>
                                        </thead>
                                        <tbody>
                                                  <tr>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/AgniveerGD">
                                                                                Agniveer GD
                                                                      </Link>
                                                            </td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/NDA">
                                                                                NDA & NA
                                                                      </Link>
                                                            </td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/CDS">
                                                                                CDS
                                                                      </Link>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/SSCGD">
                                                                                SSC GD
                                                                      </Link>
                                                            </td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/ARMYTES">
                                                                                ARMY TES
                                                                      </Link>
                                                            </td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/CAPF">
                                                                                CAPF
                                                                      </Link>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td></td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/AgniveerTechnical">
                                                                                Agniveer Technical
                                                                      </Link>
                                                            </td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/AFCAT">
                                                                                AFCAT
                                                                      </Link>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td></td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/AgniveerClerk">
                                                                                Agniveer Clerk
                                                                      </Link>
                                                            </td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/IB">
                                                                                IB ACIO
                                                                      </Link>
                                                            </td>
                                                  </tr>
                                                  <tr>
                                                            <td></td>
                                                            <td></td>
                                                            <td>
                                                                      <Link className="link-style" to="/defenceExams/SSCCPO">
                                                                                SSC CPO
                                                                      </Link>
                                                            </td>
                                                  </tr>
                                        </tbody>
                              </table>
                    </div >

          );
}

export default ExamTable;
