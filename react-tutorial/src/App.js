import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeTab, setExplore } from './tabSlice';
import './App.css';



function App() {
  const { activeTab, isExplored } = useSelector((state) => state.tabs);
  const dispatch = useDispatch();

  // Ella tab-ukkum details inga add panniyachu
  const projectData = {
    Home: {
      title: "Welcome to My Portfolio",
      description: "Hi! I am a React Developer. Here, you can see full details about me and my work.",
      image: "https://picsum.photos/id/1/600/400",
      fullContent: "This is the detailed Home page. Here you can see my biography, my journey in tech, and my vision for future projects."
    },
    Blog: {
      title: "My Technical Blogs",
      description: "I have written web development articles and tutorials here",
      image: "https://picsum.photos/id/20/600/400",
      fullContent: "Welcome to my Blog section. Here I share tutorials on React, Redux Toolkit, and Modern CSS techniques."
    },
    Help: {
      title: "How Can I Help You?",
      description:"If you have any questions, you can contact me through this section.",
      image: "https://picsum.photos/id/26/600/400",
      fullContent: "Need assistance? You can reach out via email or check our FAQ section to resolve your issues quickly."
    },
    Code: {
      title: "GitHub Repository",
      description: "All my open-source projects and source codes are available on GitHub.",
      image: "https://picsum.photos/id/0/600/400",
      fullContent: "Browse through my repositories. I have worked on E-commerce apps, Dashboards, and UI libraries."
    },
    About: {
      title: "About Me",
      description: "Here are the details about my education, skills, and hobbies.",
      image: "https://picsum.photos/id/22/600/400",
      fullContent: "I am a passionate developer with expertise in JavaScript ecosystem. I love building user-centric applications."
    }
  };

  // State-la irukura activeTab vachi data-va edukkurom
  const currentData = projectData[activeTab] || projectData.Home;

  return (
    <div className="app-container">
      {/* Sidebar Section */}
      <div className="sidebar">
        <div className="sidebar-title">React Project</div>
        
        {Object.keys(projectData).map((tabName) => (
          <div 
            key={tabName}
            className={`tab-item ${activeTab === tabName ? 'active' : ''}`}
            onClick={() => dispatch(changeTab(tabName))}
          >
            {tabName}
          </div>
        ))}
      </div>

      {/* Main Content Section */}
      <div className="content-area">
        {!isExplored ? (
          <div className="card">
            <img src={currentData.image} alt={activeTab} className="content-image" />
            <h1 className="content-title">{currentData.title}</h1>
            <p className="content-text">{currentData.description}</p>
            <button className="btn-action" onClick={() => dispatch(setExplore(true))}>
              Explore {activeTab}
            </button>
          </div>
        ) : (
          <div className="card full-page-content">
            <button className="back-btn" onClick={() => dispatch(setExplore(false))}>
              ← Back to Overview
            </button>
            <h1 className="content-title">Detailed {activeTab} View</h1>
            <hr style={{ margin: '20px 0', border: '0.5px solid #eee' }} />
            <p className="content-text">{currentData.fullContent}</p>
            <img src={currentData.image} alt="Detail" className="content-image" style={{ height: '150px', width: 'auto' }} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;