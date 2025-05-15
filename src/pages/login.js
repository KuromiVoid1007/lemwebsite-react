import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, NavLink } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    axios.post('http://localhost:3001/login', { login, password })
      .then(response => {
        // Сохраняем пользователя
        localStorage.setItem('user', JSON.stringify(response.data));
        
        // Сначала переходим на /profile
        navigate('/profile');

        // Затем перезагружаем, чтобы обновить NavBar
        setTimeout(() => {
          window.location.reload();
        }, 100);
      })
      .catch(error => {
        alert('Неверный логин или пароль');
        console.error(error);
      });
  };

  return (
    <div className="conteiner">
      <div className="base-login-form">
        <div className="login-form">
          <input
            placeholder="Login"
            type="text"
            value={login}
            onChange={e => setLogin(e.target.value)}
          />
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <NavLink to="/registration">Registor</NavLink>
          <NavLink to="/resetpassword">ResetPassword</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Login;
