import React, { useState } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import axios from 'axios';

const Registration = () => {

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [returnPassword, setReturnPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== returnPassword) {
      alert('Пароли не совпадают');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3001/register', {
        login,
        password
      });
      alert(response.data.message);
      setTimeout(() => {
          navigate('/login');
        }, 100);
    } catch (err) {
      alert('Ошибка регистрации');
    }
  };
  
    return ( 
        <>
          <div className="conteiner">
              <div className="base-login-form">
                <div className="login-form">
                  <input placeholder="Login" type="text" value={login} onChange={e => setLogin(e.target.value)} />
                  <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                  <input placeholder="Return Password" type="password" value={returnPassword} onChange={e => setReturnPassword(e.target.value)} />
                  <button onClick={handleRegister}>Registration</button>
                  <NavLink to="/login">Login</NavLink>
                </div>
            </div>
          </div>
        </>
     );
}
 
export default Registration;