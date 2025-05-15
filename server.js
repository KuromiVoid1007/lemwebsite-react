const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt'); // Добавили для хеширования

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Подключение к БД
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1720',
  database: 'lemlauncher'
});

db.connect(err => {
  if (err) {
    console.error('Ошибка подключения к БД:', err);
  } else {
    console.log('Подключено к базе данных.');
  }
});

// Регистрация
app.post('/register', async (req, res) => {
  const { login, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = 'INSERT INTO user (login, password) VALUES (?, ?)';
    db.query(sql, [login, hashedPassword], (err, result) => {
      if (err) {
        console.error('Ошибка при вставке:', err);
        return res.status(500).json({ error: 'Ошибка при регистрации' });
      }

      res.json({ message: 'Регистрация успешна' });
    });
  } catch (err) {
    console.error('Ошибка хеширования:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

// Авторизация
app.post('/login', (req, res) => {
  const { login, password } = req.body;

  const sql = 'SELECT * FROM user WHERE login = ?';
  db.query(sql, [login], async (err, results) => {
    if (err) {
      console.error('Ошибка при логине:', err);
      return res.status(500).json({ error: 'Ошибка при входе' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Неверный логин или пароль' });
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ error: 'Неверный логин или пароль' });
    }

    res.json({ id: user.id, login: user.login });
  });
});

// Сброс пароля
app.post('/resetpassword', async (req, res) => {
  const { login, newPassword } = req.body;

  if (!login || !newPassword) {
    return res.status(400).json({ error: 'Логин и новый пароль обязательны' });
  }

  try {
    // Проверяем, существует ли пользователь
    const checkUserQuery = 'SELECT * FROM user WHERE login = ?';
    db.query(checkUserQuery, [login], async (err, results) => {
      if (err) {
        console.error('Ошибка при проверке пользователя:', err);
        return res.status(500).json({ error: 'Ошибка сервера' });
      }

      if (results.length === 0) {
        return res.status(404).json({ error: 'Пользователь не найден' });
      }

      // Хешируем новый пароль
      const hashedPassword = await bcrypt.hash(newPassword, 10);

      // Обновляем пароль
      const updateQuery = 'UPDATE user SET password = ? WHERE login = ?';
      db.query(updateQuery, [hashedPassword, login], (err, result) => {
        if (err) {
          console.error('Ошибка при обновлении пароля:', err);
          return res.status(500).json({ error: 'Ошибка при обновлении пароля' });
        }

        res.json({ message: 'Пароль успешно обновлен' });
      });
    });
  } catch (err) {
    console.error('Ошибка при сбросе пароля:', err);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});



app.listen(3001, () => {
  console.log('Сервер запущен на порту 3001');
});


