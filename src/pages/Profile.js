import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!user) {
    navigate('/login');
    return null;
  }

  return (

    <div className='conteiner'>
      <div className="profile-form">
        <div className="card-author">
          <h1>Привет, {user.login}</h1>
          <p>ID: {user.id}</p>
          <button onClick={() => {
            localStorage.removeItem('user');
            navigate('/login');
            setTimeout(() => {
            window.location.reload();
            }, 100);
          }}>
            Выйти
          </button>
        </div>

        <div className="avatar-author">
          <div className="circle">

          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
