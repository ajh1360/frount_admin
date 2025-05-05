import { Link } from 'react-router-dom';
import '../assets/css/Notice.css';

const notices = [
  { id: 1, title: '공지사항 제목1', date: '2025-05-01' },
  { id: 2, title: '공지사항 제목2', date: '2025-04-20' },
];

const NoticeList = () => (
  <div>
    <h2>공지사항 목록</h2>
    <Link to="/notices/write"><button>공지 작성</button></Link>
    <ul>
      {notices.map(notice => (
        <li key={notice.id}>{notice.title} - {notice.date}</li>
      ))}
    </ul>
  </div>
);

export default NoticeList;