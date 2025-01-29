import React from "react";
import {useNavigate } from 'react-router-dom';

function FOUR_OU_FOUR() {
          const navigate = useNavigate();

          const goBack = () => {
                    navigate(-1)
          }
          return (
                    <div className="Four-o-Four">
                              <div className="four-o-four">
                                        <h1>404</h1>
                                        <h2>Oops! Even John Travolta can't find your webpage!</h2>
                                        <button onClick={goBack}>Go Back</button>
                                        <div className="image-container">
                                                  <img src="/images/Ll3eKQ-unscreen.gif" alt="dimond"  />
                                        </div>
                              </div>
                    </div>
          )
}

export default FOUR_OU_FOUR;