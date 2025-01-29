import React from "react";
import "./Exams.css";
import { Link, useNavigate } from "react-router-dom";

function Exam() {

          const navigate = useNavigate();

          const handleGoBack = () => {
                    navigate(-1);
          };

          return (
                    <div className="exam-topics">
                              <h1>Exams</h1>
                              <ul>
                                        <Link to={'/defenceexams'}><li>Defence Exams</li></Link>
                                        <li>JEE</li>
                                        <li>NEETs</li>
                                        <Link to={'/ncert'}><li>NCERT</li></Link>
                              </ul>

                              <p onClick={handleGoBack}>Back</p>

                    </div>
          )
}

export default Exam;