import React from 'react';
import { Link } from 'react-router-dom';
import './AdminNavbar.css';

const AdminNavbar = () => (
  <nav className="admin-navbar">
    <ul>
      <li><Link to="/dashboard">대시보드</Link></li>
      <li><Link to="/users">고객 관리</Link></li>
      <li><Link to="/notices">공지사항</Link></li>
    </ul>
  </nav>
);

export default AdminNavbar;