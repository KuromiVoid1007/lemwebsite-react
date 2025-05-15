import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [login, setLogin] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:3001/resetpassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, newPassword }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Ошибка сброса пароля');
      }

      setMessage(data.message);
      setTimeout(() => navigate('/login'), 2000); // Перенаправление через 2 секунды
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="container">
        <div className="reset-form">
          <h2>Сброс пароля</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Логин"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Новый пароль"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit">Сбросить пароль</button>
          </form>
          {error && <p className="error">{error}</p>}
          {message && <p className="success">{message}</p>}
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
