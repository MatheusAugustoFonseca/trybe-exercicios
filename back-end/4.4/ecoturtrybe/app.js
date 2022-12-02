const express = require('express');
const auth = require('./middleware/auth');
const { creatAtValidation } = require('./middleware/createAtValidate');
const { descValidation } = require('./middleware/descriptionValidate');
const difValidation = require('./middleware/difficultyValidate');
const nameValidation = require('./middleware/nameValidate');
const { priceValidation } = require('./middleware/priceValidate');
const rateValidation = require('./middleware/ratingValidate');
const generateToken = require('./utils/generateToken');

const app = express();
app.use(express.json());

app.post('activities',
  auth,
  nameValidation,
  priceValidation,
  descValidation,
  creatAtValidation,
  rateValidation,
  difValidation,
   (_req, res) => {
  res.status(201).json({ message: 'Atividade cadastrada com sucesso!' })
});

app.post('/signup', (req, res) => {
  const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
    return res.status(401).json({ message: 'message": "Campos ausentes!' })
  }

  const token = generateToken();
  return res.status(200).json({ token: `${token}` })
});

module.exports = app;