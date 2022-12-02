const creatAtValidation = (req, res, next) => {
  const { createdAt } = req.body.description;
  const DATE_REGEX = /^(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[0-2])\/(19|20)\d{2}$/;
  if (!DATE_REGEX.test(createdAt)) {
    return res.status(400).json({ message: 'O campo "createdAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
}

module.exports = { creatAtValidation };