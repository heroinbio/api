import path from 'path';
import express from 'express';
import fs from 'fs';
const app = express();
const passwords = JSON.parse(fs.readFileSync('passwords.json', 'utf8'));
app.get('/', (req, res) => {
  const dirname = path.resolve();
  res.sendFile(path.join(dirname, 'index.html'));
});
app.get('/:password', (req, res) => {
  const password = req.params.password;
  const validPasswords = passwords.password.split(',');
  if (validPasswords.includes(password)) {
    res.json({ message: 'Password is valid' });
  } else {
    res.json({ message: 'Password is invalid' });
  }
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
