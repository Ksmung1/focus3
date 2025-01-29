import React  from "react";
import { Link} from "react-router-dom"; // Import useNavigate
import ArticleCards from "./ArticlesCard";
import articleData from "./ArticleData";


function AllArticles() {
          return (
                    <div className="Articles">
                              <h1>All Articles</h1>
                              <div className="articles">
                                        {articleData.map((article, index) => (
                                                  <Link className="link-style" to={article.path} key={index}>
                                                            <ArticleCards img={article.img} h2={article.h2} />
                                                  </Link>
                                        ))}
                              </div>
                    </div>
          );
}



export default AllArticles;