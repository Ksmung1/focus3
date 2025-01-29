import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdKeyboardArrowRight } from "react-icons/md";

const MonthView = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { monthYear, news } = location.state || {};

  if (!monthYear || !news) {
    return <p>No data available.</p>;
  }

  // Extract year and month
  const [year, month] = monthYear.split('-');
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const monthName = months[parseInt(month, 10) - 1]; // Convert month number to name

  return (
    <div className='MonthView'>
      <button onClick={() => navigate(-1)} style={backButtonStyle}>
        ⬅ Back
      </button>
      <h2>Current Affairs for {monthName} {year}</h2>
      <div className='goal-news flex col'>
        {news.map((newsItem) => (
          <button 
            key={newsItem.id} 
            onClick={() => navigate('/goal-digger/article', {state: {article: newsItem}})} 
            style={buttonStyle}
          >
            {newsItem.publishedAt}
            <MdKeyboardArrowRight />
          </button>
        ))}
      </div>
    </div>
  );
};

export default MonthView;

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

const buttonStyle = {
  padding: '10px 15px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ddd'
};
