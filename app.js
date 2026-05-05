const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


function authMiddleware(req, res, next) {
  const authHeader = req.header('Authorization');
  if (authHeader === 'admin123') {
    return next();
  }
  return res.status(403).send('Access Denied');
}

app.get('/public', (req, res) => {
  res.send('Welcome to the public route');
});

app.get('/private', authMiddleware, (req, res) => {
  res.send('Welcome to private route');
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
