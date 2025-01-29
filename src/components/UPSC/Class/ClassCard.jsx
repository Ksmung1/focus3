import React from "react";
import { Link } from "react-router-dom";

function ClassCard(props) {

          return (
                    <Link style={{ textDecoration: 'none' }} to={props.link}>
                              <div className="class-card">
                                        <h2 style={{ margin: '0', textAlign: 'center' }}>{props.class}</h2>
                                        <h6 style={{ margin: '0', textAlign: 'center' }}> {props.topic}</h6>
                              </div>
                    </Link>
          )
}

export default ClassCard;