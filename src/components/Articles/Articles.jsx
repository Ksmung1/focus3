import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import ArticleCards from "./ArticlesCard";
import articleData from "./ArticleData";

function Articles() {
          // Use state to keep track of whether to show all articles
          const showAllArticles = useState(false);

          // Use a variable to control how many articles to display
          const maxArticlesToShow = showAllArticles ? articleData.length : 3;

          // Use useNavigate to navigate to the AllArticles page
          const navigate = useNavigate(); // Use useNavigate here

          // Function to navigate to the AllArticles page
          const showAllArticlesPage = () => {
                    navigate("/all-articles"); // Use navigate to navigate to the AllArticles page
          };

          return (
                    <div className="Articles">
                              <h1>ARTICLES</h1>
                              <div className="articles">
                                        {articleData.slice(0, maxArticlesToShow).map((article, index) => (
                                                  <Link style={{ textDecoration: 'none' }} className="link-style" to={article.path} key={index}>
                                                            <ArticleCards img={article.img} h2={article.h2} />
                                                  </Link>
                                        ))}
                              </div>

                              {!showAllArticles && (
                                        <button onClick={showAllArticlesPage} className="morebutton">
                                                  More Articles ...
                                        </button>
                              )}
                    </div>
          );
}

export default Articles;
