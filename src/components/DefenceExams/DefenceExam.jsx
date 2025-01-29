import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./DefenceExams.css";
import ExamCard from "./DEFENCEEXAMS/ExamCard";
import FOUR_OU_FOUR from "../FOUR_OU_FOUR";
import examData from "./examData";


function DefenceExam() {
          const { examName } = useParams();

          const exam = examData.find((exam) => exam.urlName === examName);

          useEffect(() => {
                    window.scrollTo(0, 0);
          }, []);

          if (exam) {
                    return (
                              <div className="DefenceExams">
                                        <ExamCard
                                                  name={exam.name}
                                                  title={exam.title}
                                                  img={exam.imgURL}
                                                  frequency={exam.frequency}
                                                  selectionProcess={exam.selectionProcess}
                                                  examPattern={exam.examPattern}
                                                  qualification={exam.qualification}
                                                  ageLimit={exam.ageLimit}
                                                  vacancy={exam.vacancy}
                                                  post={exam.post}
                                                  salary={exam.salary}
                                        />
                              </div>
                    );
          } else {
                    return <FOUR_OU_FOUR />
          }
}

export default DefenceExam;
