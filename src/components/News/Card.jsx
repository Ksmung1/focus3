import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
          return (
                    <Link to={props.link}>
                              <div className="news-card">
                                        {/* <img src={props.emoji} alt="dimond" /> */}
                                        <h2>{props.subject}</h2>
                              </div>
                    </Link>

          )
}

export default Card