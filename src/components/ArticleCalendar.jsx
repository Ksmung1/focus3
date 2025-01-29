import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../css/CalendarStyle.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Normalize Date to YYYY-MM-DD without time zone conversion
const normalizeDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Get month, zero-padded
  const day = String(date.getDate()).padStart(2, '0'); // Get day, zero-padded

  return `${year}-${month}-${day}`; // Return formatted date: YYYY-MM-DD
};

const ArticleCalendar = () => {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [articles, setArticles] = useState({});

  // Handle day click to navigate to the article for that date
  const handleDateClick = (date) => {
    const formattedDate = normalizeDate(date);
    const article = articles[formattedDate];  // Get the article for that day
    
    if (article) {
      // Pass the full article object to the ArticlePage component
      navigate('/articles', { state: { article } });
    } 
  };


  useEffect(() => {
    axios.get('https://focus-backend-xxar.onrender.com/focus/articles')
      .then((res) => {
        const articlesByDate = res.data.reduce((acc, article) => {
          const articleDate = normalizeDate(new Date(article.publishedAt));
          if (articleDate) {
            acc[articleDate] = article;  // Store the entire article object
          }
          return acc;
        }, {});
        setArticles(articlesByDate);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  return (
    <div className="calendar-container">
      <h1 style={{ color: "#fe5a1d", fontSize:'2rem'}}>Current Affairs</h1>
      <Calendar
        showNeighboringMonth={false}
        onChange={setDate}
        value={date}
        tileContent={({ date }) => {
          const key = normalizeDate(date);
          return articles[key] ? <span className="dot">•</span> : null;
        }}
        onClickDay={handleDateClick}
      />
    </div>
  );
};

export default ArticleCalendar;
