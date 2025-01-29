import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
          const cardStyle = {
                    backgroundColor: `var(--clr-${props.cardColor})`,
          };

          return (
                    <div className="card" style={cardStyle}>
                              <Link to={props.link} style={{ textDecoration: 'none', color: 'white' }}>
                                        <p className="card-content">
                                                  {props.emoji}
                                                  {props.paragraph}
                                        </p>
                              </Link>
                    </div>
          );
}

export default Card;
