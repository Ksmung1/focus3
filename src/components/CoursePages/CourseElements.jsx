import React, { useState } from "react";

function CourseElement() {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleTopicClick = (content) => {
    setSelectedTopic(content);
  };

  const topicContent = {
    "1": `1. Expert Faculty:\n Our team of experienced educators, industry specialists, and defense experts will guide you through the curriculum, sharing valuable insights and practical perspectives.`,
    "2": "2. Personalized Learning: Understanding your unique needs, we offer personalized attention, doubt-clearing sessions, and individual mentorship to ensure your progress.",
    "3": "3. Mock Tests and Analysis: Regular mock tests in exam-like conditions empower you to gauge your advancement, identify strengths, and rectify weaknesses promptly.",
    "4": "4. Comprehensive Study Materials: Comprehensive study materials covering all subjects will be provided, eliminating the need for external resources and fostering a focused learning experience.",
    "5": "5. Personality Enhancement: Beyond academics, we emphasize personality development to enhance communication, leadership, and overall personality traits essential for defense careers.",
    "6": "6. Physical Training: Physical fitness is integral to defense careers. Customized physical training sessions equip you to meet the physical demands of your chosen path.",
    "7": "7. Interview Preparation: Our interview readiness modules equip you with the skills and confidence to navigate interviews with finesse, making a lasting impression.",
    "8": "8. Collaborative Learning Environment: Engage in collaborative learning through group discussions, study circles, and forums, fostering an environment of mutual support and knowledge-sharing.",
  };

  const hideTopicContent = () => {
    setSelectedTopic(null);
  };

  return (
    <div className="dec-content">
      <h1 style={{ fontSize: "1.5rem", fontWeight: "800", margin: "30px 30px 20px",  color: "#fe5a1d" }}>
        CORE ELEMENTS OF THE COURSE
      </h1>
      <div className="dec-titles">
        {Object.entries(topicContent).map(([key, value]) => (
          <button key={key} onClick={() => handleTopicClick(key)}>
            <li>{value.split(":")[0]}</li>
          </button>
        ))}
      </div>
      {selectedTopic && (
        <div>
          <button onClick={hideTopicContent} style={{ cursor: "pointer", fontSize: "20px" }}>
            X
          </button>
          <p className="topic-para" style={{ margin: "10px 25px", padding: "20px", backgroundColor: "white", color: "black" }}>
            {topicContent[selectedTopic]}
          </p>
        </div>
      )}
    </div>
  );
}

export default CourseElement;
