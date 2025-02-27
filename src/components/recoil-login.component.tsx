import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { userLoginState } from '../recoil-store/atoms/userAtom';


const RecoilLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useRecoilState(userLoginState);

  const handleLogin = (e:any) => {
    e.preventDefault();
    
    if (username && password) {
      setUser({
        isLoggedIn: true,
        username: username,
        token: 'mock-jwt-token',
      });
    }
  };

  const handleLogout = () => {
    setUser({
      isLoggedIn: false,
      username: '',
      token: '',
    });
  };

  if (user.isLoggedIn) {
    return (
      <div>
        <h1>Welcome, {user.username}!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default RecoilLogin;