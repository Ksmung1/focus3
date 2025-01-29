import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
          return (
                    <Link style={{ textDecoration: 'none' }} to={props.link}>
                              <div className="CA-card">
                                        <h1>{props.h1}</h1>
                              </div>
                    </Link>

          )
}
export default Card;