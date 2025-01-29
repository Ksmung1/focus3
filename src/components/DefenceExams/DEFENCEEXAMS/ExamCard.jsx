import React from "react";


function ExamCard(props) {
          return (
                    <div className="EXAM-details">
                              <h1 style={{ color: '#fe5a1d', fontSize: '24px', fontWeight: '800', margin: '0px 0 20px' }}>{props.title}</h1>
                              <img src={props.img} alt="defenceimage"/>
                              <div className="pbox">
                                        <table className="exam-info-table">
                                                  <tbody>
                                                            <tr>
                                                                      <td><strong>Exam name</strong></td>
                                                                      <td>{props.name}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Frequency of Exam</strong></td>
                                                                      <td>{props.frequency}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Selection process</strong></td>
                                                                      <td>
                                                                                {props.selectionProcess}
                                                                      </td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>EXAM PATTERN</strong></td>
                                                                      <td>
                                                                                {props.examPattern}
                                                                      </td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Qualification</strong></td>
                                                                      <td>{props.qualification}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Age limit</strong></td>
                                                                      <td>{props.ageLimit}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Vacancy</strong></td>
                                                                      <td>{props.vacancy}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Post</strong></td>
                                                                      <td>{props.post}</td>
                                                            </tr>
                                                            <tr>
                                                                      <td><strong>Salary</strong></td>
                                                                      <td>{props.salary}</td>
                                                            </tr>
                                                  </tbody>
                                        </table>
                              </div>
                    </div>
          );
}


export default ExamCard;
