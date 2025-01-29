import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
          return (
                    <div className="div">
                              <div className="img-container"><img src={props.img} alt="dimond"  /></div>

                              <Link to={props.link} style={{
                                        textDecoration: 'none'
                              }}><div className="Milestone">
                                                  <div className="milestone-details" style={{ background: props.style }}>
                                                            <h1>{props.topic}</h1>
                                                            <p>{props.SubTopic}</p>
                                                  </div>
                                        </div >
                              </Link>
                    </div>
          )
}

export default Card;