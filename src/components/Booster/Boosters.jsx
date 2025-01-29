import React from "react";
import "./Boosters.css"

function Boosters() {
          return (
                    <div className="Booters">
                              <h6 style={{ paddingLeft: "25px" }}>Exam Booster Pack 🚀📚🔥</h6>
                              <div className="subscription">
                                        <div className="items">
                                                  <div className="card" style={{ backgroundColor: "red" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsGK"> History</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "blue" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsGK"> Pol.Sc</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "green" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsHistory"> Geo</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "black", color: "white" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsPolitics"> Eco</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "purple" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsMaths"> Phy</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "orange" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsChemistry"> Chem</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "pink" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsChemistry"> Bio</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "teal" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsChemistry"> Maths</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "brown" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsChemistry"> English</a>
                                                            </p>
                                                  </div>
                                                  <div className="card" style={{ backgroundColor: "gray" }}>
                                                            <p>
                                                                      <a href="Exams/index.html?section=gsChemistry"> Past Questions</a>
                                                            </p>
                                                  </div>
                                        </div>


                                        <div >
                                                  <h6>One Stop Solution <br />For All Exam Preparation</h6>

                                                  <ul>
                                                            <li>Test Series</li>
                                                            <li>Personal Development</li>
                                                            <li>Career guidance</li>
                                                            <li>Motivation</li>
                                                  </ul>

                                                  <div className="row">
                                                            <div className="col">
                                                                      <h6>100+</h6>
                                                                      <p>Classes</p>
                                                            </div>
                                                            <div className="col">
                                                                      <h6>1+</h6>
                                                                      <p>Mock tests</p>
                                                            </div>
                                                            <div className="col">
                                                                      <h6>Many</h6>
                                                                      <p>Booster Tests</p>
                                                            </div>
                                                  </div>
                                        </div >
                              </div>
                    </div>
          );
}

export default Boosters;
