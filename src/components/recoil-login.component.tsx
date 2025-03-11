import { useState } from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { userLoginSelector, userLoginState } from '../recoil-store/atoms/userAtom';


const RecoilLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useRecoilState(userLoginState);
  const resetUserLogin = useResetRecoilState(userLoginSelector);
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
        <button type="button" onClick={() => resetUserLogin()}>Reset</button>
      </div>
    );
  }

  
  return (
    <form onSubmit={handleLogin} className='space-y-2'>
      <p className='text-lg font-bold'>Login (Using Recoil)</p>
      <div>
        <label>Username:</label>
        <input 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className='border rounded-lg ml-2'
          tabIndex={2}
        />
      </div>
      <div>
        <label>Password:</label>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className='border rounded-lg ml-2'
          tabIndex={1}
        />
      </div>
      <button type="submit">Login</button>
      
    </form>
  );
};

export default RecoilLogin;