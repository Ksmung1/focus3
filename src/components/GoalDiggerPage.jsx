import { useLocation, useNavigate } from 'react-router-dom';

const GoalDiggerPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const article = location.state?.article;

  if (!article) {
    return (
      <div>
        <h2>No article found!</h2>
        <button onClick={() => navigate('/')}>Go Back</button>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1 className='mid' style={{fontSize:'2rem'}}>{article.title}</h1>
      <p className='mid'><strong>Published on:</strong> {article.publishedAt}</p>
      <p>{article.content}</p>
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


export default GoalDiggerPage;
