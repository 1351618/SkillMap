import React from 'react';



function Authorization() {
  return (
    <div className='Authorization'>
        <h2>Вход в личный кабинет</h2>
        <input type="text" placeholder="Логин" />
        <input type="password" placeholder="Пароль" />
        <button>войти</button>
        <a href="/">Забыл логин или пароль</a>
        <div>
            <svg viewBox="0 0 24 24" width="50" height="50">
            <circle cx="12" cy="12" r="8" />
          </svg>
          <svg viewBox="0 0 24 24" width="50" height="50">
            <circle cx="12" cy="12" r="8" />
          </svg>
        </div>
        <button>Зарегистрироваться</button>
    </div>
  );
}

export default Authorization;