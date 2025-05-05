import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/AdminNavbar.css';

const AdminNavbar = () => (
  <nav className="admin-navbar">
    <ul>
      <li><Link to="/dashboard">관리자페이지</Link></li>
      <li><Link to="/users">사용자 관리</Link></li>
      <li><Link to="/userinfo">사용자 정보</Link></li>
      <li><Link to="/notices">공지사항</Link></li>
      
    </ul>
  </nav>
);

export default AdminNavbar;