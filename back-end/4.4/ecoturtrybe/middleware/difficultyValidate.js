const difValidation = (req, res, next) => {
    const { difficulty } = req.body.description;
    const difficulties = ['Fácil', 'Médio', 'Difícil'];
    if (!difficulties.includes(difficulty)) {
      res.status(400).json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' })
    }
    next();
  }
  
  module.exports = difValidation;
