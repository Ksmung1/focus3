import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useNavigate } from 'react-router-dom';

const Poster = () => {
  const [title, setTitle] = useState('Current Affairs - FOCUS');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const [date, setDate] = useState(() => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  });
  const [message, setMessage] = useState('');
  const quillRef = useRef(null);

  // Disable browser default behavior for Ctrl + 2
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === '2') {
        e.preventDefault(); // Prevent the browser from switching tabs
        const editor = quillRef.current.getEditor();
        editor.format('header', 2); // Apply the h2 style
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const editor = quillRef.current.getEditor();
    const rawHTML = editor.root.innerHTML;

    try {
      const response = await axios.post('https://focus-backend-xxar.onrender.com/focus/articles', {
        title,
        content: rawHTML,
        publishedAt: date,
      });

      if (response.status === 201) {
        setMessage('Post submitted successfully');
        setTitle('Current Affairs - FOCUS');
        setContent('');
        navigate('/');
      }
    } catch (error) {
      setMessage('Failed to submit post. Please try again.');
      console.error('Error:', error);
    }
  };

  return (
    <div className="poster">
      <h2>Create a new post</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Content:</label>
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={setContent}
            modules={Poster.modules}
            formats={Poster.formats}
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <button type="submit">Post</button>
      </form>
    </div>
  );
};

Poster.modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ align: [] }],
    ['link', 'image', 'code-block'],
    ['clean'],
  ],
};

Poster.formats = [
  'header', 'font', 'size',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'link', 'image', 'align', 'code-block'
];

export default Poster;
