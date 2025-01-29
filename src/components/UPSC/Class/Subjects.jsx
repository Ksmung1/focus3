import React from "react";
import { useParams } from "react-router-dom";
import ClassCard from "./ClassCard";
import classData from "./classData";
import "../upsc.css";

function SubjectContent({ subject }) {
          if (classData[subject]) {
                    const Items = classData[subject];
                    const subj = subject
                    return (
                              <div style={{ marginTop: '70px' }}>
                                        <h1 style={{ margin: '20px', fontSize: '25px', fontWeight: '700' }}>{subject.toUpperCase()}</h1>
                                        <div className="class-card-container">
                                                  {Items.map((item, index) => (
                                                            <div key={index}>
                                                                      <ClassCard class={item.class} topic={item.topic} link={`/pdf-viewer/${subj}${item.class}`} /> {/* Pass pdfUrl as a prop */}
                                                            </div>
                                                  ))}
                                        </div>
                              </div>
                    );
          } else {
                    return (
                              <div>
                                        <h1>Subject not found</h1>
                              </div>
                    );
          }
}

function Subjects() {
          const { subject } = useParams();

          return <SubjectContent subject={subject} />;
}

export default Subjects;
