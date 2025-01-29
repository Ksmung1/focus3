import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Articles.css";
import articles from "./article";

function ArticleCard() {
          // Scrolls to the top of the page
          window.scrollTo(0, 0);

          function goMore() {
                    window.location.href('/all-articles')
          }

          const { articleName } = useParams();

          // Check if the articleName exists in the articles object
          if (articles.hasOwnProperty(articleName)) {
                    const article = articles[articleName];

                    return (
                              <div className="articles-card-viewer">
                                        <h3>{article.title}</h3>
                                        <img src={article.img} alt={article.title} />
                                        <p className="time">{article.date}</p>
                                        <p className="content">{article.content}</p>
                                        <Link to='/'><button style={{ margin: '30px 0 0 ', border: 'none', backgroundColor: 'white', color: 'black', padding: '10px', cursor: 'pointer' }} > Back</button></Link>
                                        <button style={{ cursor: 'pointer' }} onClick={goMore}>View more Articles</button>
                              </div>
                    );
          } else {
                    // Handle the case where the articleName doesn't match any known articles
                    return <p>Article not found</p>;
          }
}

export default ArticleCard;
