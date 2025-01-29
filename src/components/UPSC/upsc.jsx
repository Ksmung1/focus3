import React, { useState, useEffect } from "react";
import "./upsc.css";
import Card from "./Card";
import subjectData from "./subjectData";
import Loading from "../Loading/Loading";

function Upsc() {
          // Add a state variable to control the visibility of the loading screen
          const [isLoading, setIsLoading] = useState(true);

          // Use the useEffect hook to set a timeout for 5 seconds to hide the loading screen
          useEffect(() => {
                    const timer = setTimeout(() => {
                              setIsLoading(false);
                    }, 2000);

                    // Clear the timeout when the component unmounts to prevent memory leaks
                    return () => clearTimeout(timer);
          }, []);

          return (
                    <div>
                              {isLoading ? ( // Render the loading screen while isLoading is true
                                        <Loading />
                              ) : (
                                        // Render the content when isLoading becomes false
                                        <>
                                                  <h1 style={{ fontSize: "27px", fontWeight: '800', textAlign: "center", color: '#fe5a1d' }}>NCERT</h1>
                                                  <div className="exam-card-container">
                                                            {subjectData.map((subjectData, index) => (
                                                                      <Card
                                                                                key={index}
                                                                                link={subjectData.link}
                                                                                subject={subjectData.subject}
                                                                                emoji={subjectData.emoji}
                                                                      ></Card>
                                                            ))}
                                                  </div>
                                        </>
                              )}
                    </div>
          );
}

export default Upsc;
