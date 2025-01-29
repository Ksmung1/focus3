import React from "react";
import newsData from "./newsData";
import Card from "./Card";
import "./News.css"
import { Link } from "react-router-dom";

function News() {
          // Add a state variable to control the visibility of the loading screen

          // Use the useEffect hook to set a timeout for 5 seconds to hide the loading screen

          return (
                    <div>

                              <div style={{ margin: '50px 30px' }}>
                                        <h1 style={{ fontSize: "27px", fontWeight: '800', textAlign: "center", color: '#fe5a1d' }}>NEWSPAPERS</h1>
                                        <div className="exam-card-container">
                                                  {newsData.map((newsData, index) => (
                                                            <Card
                                                                      key={index}
                                                                      link={newsData.link}
                                                                      subject={newsData.title}
                                                                      emoji={newsData.emoji}
                                                            ></Card>
                                                  ))}
                                        </div>

                                        <div style={{ marginTop: '50px' }}>
                                                  <h1 style={{ fontSize: "27px", fontWeight: '800', textAlign: "center", color: '#fe5a1d' }}>EDITORIAL</h1>
                                                  <Link to='/soon'><button style={{ padding: '  20px', width: '130px', height: '100px', fontSize: '15px', margin: '0 auto', display: 'block', backgroundColor: 'white', border: '1px solid white', borderRadius: '5px', fontWeight: '700' }}>The Hindu Editorial</button></Link>
                                        </div>
                              </div>
                    </div>
          );
}

export default News;
