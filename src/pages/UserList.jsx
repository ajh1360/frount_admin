const users = [
    { id: 1, name: 'TestUser1', status: 'UNREGISTERED', email: 'TestUser1@gmail.com', phone: '010-1111-0001', join: '2019-05-04', leave: '2019-05-02' },
    { id: 2, name: 'TestUser2', status: 'UNREGISTERED', email: 'TestUser2@gmail.com', phone: '010-1111-0002', join: '2019-08-07', leave: '2019-10-04' },
    // 생략
  ];
  
  const UserList = () => (
    <div className="user-list">
      <h2>사용자 관리</h2>
      <table>
        <thead>
          <tr>
            <th>id</th><th>계정</th><th>상태</th><th>e-mail</th><th>전화번호</th><th>가입일</th><th>해지일</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td><td>{user.name}</td><td>{user.status}</td><td>{user.email}</td><td>{user.phone}</td><td>{user.join}</td><td>{user.leave}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  export default UserList;