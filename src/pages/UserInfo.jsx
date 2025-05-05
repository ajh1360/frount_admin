
import React, { useState } from 'react';
import '../assets/css/UserInfo.css';

const UserInfo = () => {
  const [userName, setUserName] = useState('홍길동');
  const [role, setRole] = useState('관리자');
  const [notifications, setNotifications] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('사용자 정보가 저장되었습니다.');
  };

  return (
    <div className="user-info-page">
      <h2>사용자 정보</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>이름</label>
          <input value={userName} onChange={(e) => setUserName(e.target.value)} />
        </div>
        <div className="form-group">
          <label>권한</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="관리자">관리자</option>
            <option value="사용자">사용자</option>
          </select>
        </div>
        <div className="form-group checkbox">
          <label>알림 설정</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </div>
        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default UserInfo;
