// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/feed';
import Sidebar from './components/sidebar';
import Login from './Pages/login';
import Register from './Pages/Register';

const App: React.FC = () => {
  const [showNewPostForm, setShowNewPostForm] = useState(false);

  const handleNewPostClick = () => {
    setShowNewPostForm(!showNewPostForm);
  };

  const handleCloseNewPostForm = () => {
    setShowNewPostForm(false);
  };

  return (
    <Router>
      <div className="bg-gray-100 min-h-screen">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/"
            element={
              <>
                <Header onNewPostClick={handleNewPostClick} />
                <div className="container mx-auto flex">
                  <Feed showNewPostForm={showNewPostForm} onCloseNewPostForm={handleCloseNewPostForm} />
                  <Sidebar />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
