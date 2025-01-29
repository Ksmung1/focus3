import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//components
import Navbar from "./Navbar";
import Body from "./Body"
import FOUR_OU_FOUR from './FOUR_OU_FOUR';
import Exams from "./Exams";
import Advertisement from "./Advertisement";
import CurrentAffairs from './CurrentAffairs/CurrentAffairs';
import CurrentMonthAffairs from './CurrentAffairs/CurrentMonthAffairs';
import Magazines from './Magazines/Magazines';
import PDFasImage from './Magazines/TypeOMagazines';
import AllArticles from './Articles/AllArticles';
import About from './About/About';
import Upsc from './UPSC/upsc';
import Subjects from './UPSC/Class/Subjects';
import DefenceExam from './DefenceExams/DefenceExam';
import ExamTable from './ExamTable/ExamTable';
import News from './News/News';
import CA from './CurrentAffairs/CA';
import GeneralKnowledge from './GeneralAwareness/GeneralAwareness';
import Syllabus from './Syllabus/Syllabus';
import Educafe from './Educafe/Educafe';
import PDFViewer from './UPSC/PDFViewer';
import Editorial from './News/Editorial';
import UpExams from './UpExams/UpExams';
import ExploreTopics from './ExploreTopics';
import CourseElement from "./CoursePages/CourseElements";
import CourseRoadmap from "./CoursePages/CourseRoadmap";
import CourseProgress from "./CoursePages/CourseProgress";
import CourseSyllabus from "./CoursePages/CourseSyllabus";
import CoursePattern from "./CoursePages/CoursePattern";
import GoalDigger from "./GoalDigger";
import GoalDiggerPage from "./GoalDiggerPage";
import MonthView from "./MonthView";
import ArticlePage from "./ArticlePage";
//css
import "../css/App.css";
import "../css/props.css";
import OngoingCourses from "./OngoingCourses";
import ArticleCalendar from "./ArticleCalendar";
import Poster from "./Poster";
import ScrollToTop from "./ScrollToTop";
import Typewriter from "./Typewriter";
import DeepFocus from "./DeepFocus";

function App() {



          return (
                  <Router>
                    <ScrollToTop/>
                    <Routes>
                    <Route path="*" element={<FOUR_OU_FOUR />} />
        <Route path="/physics" element={<FOUR_OU_FOUR />} />
        <Route path="/" element={<><Navbar /><Advertisement/><Body/></>} />
        
        <Route path='/type' element={<><Typewriter></Typewriter></>}></Route>
        <Route path="/exams" element={<Exams />} />
        {/* <Route path="/articles/:articleName" element={<ArticleCard />} /> */}
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/currentAffairs" element={<CA />} />
        <Route path="/rhauIAS" element={<CurrentAffairs />} />
        <Route path="/generalAwareness" element={<GeneralKnowledge />} />
        <Route path="/currentAffairs/:Year/:currentMonth" element={<CurrentMonthAffairs />} />
        <Route path="/magazines" element={<Magazines />} />
        <Route path="/magazines/magazines" element={<PDFasImage />} />
        <Route path="/ncert" element={<Upsc />} />
        <Route path="/ncert/:subject" element={<Subjects />} />
        <Route path="/focus-defence" element={<ExamTable />} />
        <Route path="/defenceExams" element={<DefenceExam />} />
        <Route path="/defenceExams/:examName" element={<DefenceExam />} />
        <Route path="/focus-defence" element={<ExamTable />} />
        <Route path="/news" element={<News />} />
        <Route path="/dec" element={<ExploreTopics />} />
        <Route path="/syllabus" element={<Syllabus />} />
        <Route path="/educafe" element={<Educafe />} />
        <Route path="/editorial" element={<Editorial />} />
        <Route path="/pdf-viewer/:classname" element={<PDFViewer />} />
        <Route path="/upExams" element={<UpExams />} />
        <Route path="/ab" element={<About />} />
        <Route path="/soon" element={<div style={{ margin: '100px' }}> <h1 style={{ fontSize: '30px', color: '#fe5a1d' }}>COMING SOON</h1></div>} />
        <Route path="/core-elements" element={<CourseElement/>}></Route>
        <Route path="/course-roadmap" element={<CourseRoadmap/>}></Route>
        <Route path="/course-progress" element={<CourseProgress/>}></Route>
        <Route path="/course-syllabus" element={<CourseSyllabus/>}></Route>
        <Route path="/course-exam-pattern" element={<CoursePattern/>}></Route>
        <Route path="/classx" element={<OngoingCourses/>}></Route>
        <Route path="/goal-digger" element={<GoalDigger/>}></Route>
        <Route path="/classxii" element={<OngoingCourses/>}></Route>
        <Route path="/neet" element={<OngoingCourses/>}></Route>
        <Route path="/defencecourse" element={<OngoingCourses/>}></Route>
        <Route path="/goal-digger/article" element={<GoalDiggerPage />} />
        <Route path="/goal-digger/month" element={<MonthView />} />
        <Route path="/calendar" element={<ArticleCalendar />} />
        <Route path="/secret" element={<Poster />} />
        <Route path="/articles" element={<ArticlePage />} />
        <Route path="/deepfocus" element={<DeepFocus/>} ></Route>

  


                    </Routes>
                  </Router>  
          )
}

export default App;