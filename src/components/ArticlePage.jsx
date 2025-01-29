import React from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

const ArticlePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { date } = useParams(); // Get the date (or '404') from the URL
  const article = location.state?.article;  // Get the full article object

  if (date === '404') {
    return (
      <div>
        <h2>No article found!</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  if (!article) {
    return (
      <div>
        <h2>No article found!</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ margin: '20px' }}>
      <h1 className='mid' style={{fontSize: '2rem'}}>{article.title}</h1>
      <p className='mid'>
  <strong>
    {new Date(article.publishedAt).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })}
  </strong>
</p>
      <div className='postContent' dangerouslySetInnerHTML={{ __html: article.content }} />
      <button onClick={() => navigate(-1)} style={backButtonStyle}>⬅ Back</button>
    </div>
  );
};

const backButtonStyle = {
  padding: '5px 10px',
  margin: '10px 0',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ddd',
  backgroundColor: '#fff',
  color: '#000',
  position: 'fixed',
  bottom: '10px',
  right: '10px'
};

export default ArticlePage;
