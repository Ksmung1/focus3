import React from "react";
import './Articles.css'

function ArticleCards(props) {
          return (
                    <div className="ArticlesCards">
                              <div className="img-container">
                                        <img src={props.img} alt="card"/>
                              </div>
                              <div className="article-details">
                                        <h2>{props.h2}</h2>
                              </div>

                    </div>
          )
}

export default ArticleCards;