const express = require('express');

const app = express();

app.use(express.json());
// const OK = 200;

// app.get('/', (req, res) => res.status(OK).json({ message: 'Olá Mundo!' }));

// app.get('/', (req, res) => res.send('<h1>Olá Mundo!</h1>'));

const teams = [
  {
    id: 1,
    name: 'São Paulo Futebol Clube',
    initials: 'SPF',
  },
  {
    id: 2,
    name: 'Clube Atlético Mineiro',
    initials: 'CAM',
  },
];

app.get('/teams', (req, res) => res.status(200).json({ teams }));

app.get('/teams/:id', (req, res) => {
  const team = teams.find(({ id }) => id === Number(req.params.id));
  res.status(200).json(team);
});

app.post('/teams', (req, res) => {
  const newTeam = { ...req.body };
  teams.push(newTeam);

  res.status(201).json({ team: newTeam });
});

app.put('/teams/:id', (req, res) => {
  const { id } = req.params;
  const { name, initials } = req.body;

  const updateTeam = teams.find((team) => team.id === Number(id));

  if (!updateTeam) {
    res.status(404).json({ message: 'Team not found' });
  }

  updateTeam.name = name;
  updateTeam.initials = initials;
  res.status(200).json({ updateTeam });
});

app.delete('/teams/:id', (requisition, response) => {
  const { id } = requisition.params;
  const arrPosition = teams.findIndex((team) => team.id === Number(id));
  teams.splice(arrPosition, 1);

  response.status(200).end();
});

module.exports = app;