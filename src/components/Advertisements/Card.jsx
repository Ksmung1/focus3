import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
          return (
                    <div className="scroll-card-adv">
                              <Link to={props.link}>
                                        <img src={props.img} alt="card-img" />
                              </Link>
                    </div>
          )
}

export default Card;