import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogList from './components/BlogList';
import BlogCreate from './components/BlogCreate';
import BlogDetail from './components/BlogDetail';
import BlogEdit from './components/BlogEdit';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<BlogList />} />
            <Route path="/create" element={<BlogCreate />} />
            <Route path="/blog/:id" element={<BlogDetail />} />
            <Route path="/blog/edit/:id" element={<BlogEdit />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App; 