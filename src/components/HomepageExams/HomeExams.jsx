import React from "react";
import HomepageData from "./HomepageExamData";
import Card from "./Card";
import "./HomeExam.css"
import { Link } from "react-router-dom";

function HomepageExams() {
          return (

                    < div className="homepageExams" >
                              <h1 style={{ fontSize: '20px', borderBottom: "3px solid", marginBottom: '20px' }}>Defence Exams</h1>

                              {HomepageData.map((data, index) => (
                                        <Link className="link-style" to={data.link}>
                                                  <Card img={data.img} name={data.name} key={index} detail={data.detail} />
                                        </Link>
                              ))}
                    </div >
          )
}

export default HomepageExams;