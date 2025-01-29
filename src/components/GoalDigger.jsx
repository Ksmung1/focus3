import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const groupByMonth = (data) => {
  const grouped = {};
  //eslint-disable-next-line
  const months = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];

  data.forEach(item => {
    const [year, month] = item.publishedAt.split('-');
    const monthYear = `${year}-${month}`;

    if (!grouped[monthYear]) {
      grouped[monthYear] = [];
    }
    grouped[monthYear].push(item);
  });

  return grouped;
};
  //eslint-disable-next-line
const Card = ({ title, content }) => (
  <div className='Card' style={cardStyle}>
    <h2>{title}</h2>
    <p>{content}</p>
  </div>
);

const GoalDigger = ({ maxHeight = 'auto', overflow = 'visible', margin = '20px' }) => {
  const [viewMode, setViewMode] = useState('daily'); // daily or monthly
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedMonthlyDate, setSelectedMonthlyDate] = useState(null);
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://focus-backend-xxar.onrender.com/focus/articles')
      .then((res) => {
        console.log("Fetched Articles:", res.data);
        setArticles(res.data);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const groupedNews = groupByMonth(articles);

  const defaultStyles = {
    maxHeight,
    overflow,
    margin
  };

  return (
    <div className='GoalDigger mid' style={defaultStyles}>
      <h1>Daily & Monthly Current Affairs</h1>
      <p style={{ color: 'red' }}>Coming soon</p>
      <button onClick={()=>navigate('/goal-digger')}>More</button>
      <FaLock style={{ fontSize: '100px' }} />
      <div style={viewSwitcherStyle}>
        <button
          onClick={() => { setViewMode('daily'); setSelectedDate(null); }}
          style={viewMode === 'daily' ? activeButtonStyle : buttonStyle}
        >
          Daily
        </button>
        <button
          onClick={() => { setViewMode('monthly'); setSelectedMonth(null); }}
          style={viewMode === 'monthly' ? activeButtonStyle : buttonStyle}
        >
          Monthly
        </button>
      </div>

      {viewMode === 'daily' && !selectedDate && (
        <div className='goal-news flex col'>
          {articles.map((news) => (
            <button
              key={news.id}
              onClick={() => navigate('/goal-digger/article', { state: { article: news } })}
              style={buttonStyle}
            >
              {news.publishedAt}  -
              {news.title.slice(0,20)+"..."}
              <MdKeyboardArrowRight />
            </button>
          ))}
        </div>
      )}



      {viewMode === 'monthly' && !selectedMonth && (
        <div className='goal-news flex col'>
          {Object.keys(groupedNews).map(monthYear => {
            const [year, month] = monthYear.split('-');
            const months = [
              "January", "February", "March", "April", "May", "June", 
              "July", "August", "September", "October", "November", "December"
            ];
            const monthName = months[parseInt(month, 10) - 1]; // Convert to full month name
            return (
              <button
                key={monthYear}
                onClick={() => navigate('/goal-digger/month', { state: { monthYear, news: groupedNews[monthYear] } })}
                style={buttonStyle}
              >
                {`${year} ${monthName}`}  {/* Display full month name */}
                <MdKeyboardArrowRight />
              </button>
            );
          })}
        </div>
      )}

      {selectedMonth && !selectedMonthlyDate && (
        <div>
          <h2>Dates in {selectedMonth}</h2>
          {groupedNews[selectedMonth].map(news => (
            <button
              key={news.id}
              onClick={() => setSelectedMonthlyDate(news.publishedAt)}
              style={buttonStyle}
            >
              {news.publishedAt}
              <MdKeyboardArrowRight />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '10px',
  padding: '20px',
  margin: '10px 0',
  boxShadow: '0 0 10px rgba(0,0,0,0.1)'
};

const buttonStyle = {
  padding: '10px 15px',
  margin: '5px',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ddd',
};

const activeButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#2196F3',
  color: 'white'
};
  //eslint-disable-next-line
const backButtonStyle = {
  padding: '10px 15px',
  margin: '10px 0',
  cursor: 'pointer',
  borderRadius: '5px',
  border: '1px solid #ddd',
  backgroundColor: '#f44336',
  color: 'white'
};

const viewSwitcherStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  margin: '20px 0'
};

export default GoalDigger;
