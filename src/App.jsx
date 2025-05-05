import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminHeader from './components/AdminHeader';
import AdminNavbar from './components/AdminNavbar';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import UserList from './pages/UserList';
import NoticeList from './pages/NoticeList';
import NoticeWrite from './pages/NoticeWrite';
import './App.css';
import UserInfo from './pages/UserInfo';

function App() {
  return (
    <div className="app-container">
      <AdminHeader />
      <div className="main-layout">
        <AdminNavbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/notices" element={<NoticeList />} />
            <Route path="/notices/write" element={<NoticeWrite />} />
            <Route path="/userinfo" element={<UserInfo />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;