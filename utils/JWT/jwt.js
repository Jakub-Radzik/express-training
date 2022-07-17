var dotenv = require('dotenv');
dotenv.config();
const jwt = require('jsonwebtoken');

const generateAccessToken = (username) => {
    return jwt.sign(username, process.env.TOKEN_SECRET, { expiresIn: '7d' });
}

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    req.user = user

    next()
  })
}

module.exports = {
    generateAccessToken,
    authenticateToken
}