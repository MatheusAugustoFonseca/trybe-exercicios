const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
app.use(express.json());

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFileFunc();

  if (q) {
    const filteredMovies = movies.filter((movie) => movie.movie.includes(q));
    return res.status(200).json(filteredMovies);
    }
    res.status(200).end();

  res.status(200).json(movie);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

const moviePath = path.resolve(__dirname, './movies.json');

const readFileFunc = async () => {
  try {
    const data = await fs.readFile(moviePath);
    return JSON.parse(data);
  } catch (error) {
    console.error(`File could not be readed: ${error}`);
      }
};

app.get('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
  const movies = await readFileFunc();
    const movie = movies.find(({ id }) => id === Number(id));
  res.status(200).json(movie);
  } catch (err) {
    res.status(500).send({ message: err.message })
    }
});

app.get('/movies', async (req, res) => {
  try {
  const movies = await readFileFunc();
  res.status(200).json(movies);

  } catch (err) {
    res.status(500).send({ message: err.message })
    }
});

app.post('/movies', async (req, res) => {
  try {
    const { movie, price } = req.body;
    const movies = await readFileFunc();
    const newMovie = {
      id: movies[movies.length - 1].id + 1,
      movie,
      price,
      // ...req.body
    };
    const allMovies = JSON.stringify([...movies, newMovie]);
    // movies.push(newMovie);
    await fs.writeFile(moviePath, allMovies);
    res.status(201).json(newMovie);

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.put('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { movie, price } = req.body;
    const movies = await readFileFunc();
    const index = movies.findIndex((movie) => movie.id === Number(id));
  movies[index] = {
    id: Number(id),
    movie,
    price, }
    const updatedMovies = JSON.stringify(movies, null, 2);
    await fs.writeFile(moviePath, updatedMovies);
    res.status(200).json(movies[index]);
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});

app.delete('/movies/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const movies = await readFileFunc();
    const filteredMovies = movies.filter((movie) => movie.id !== Number(id));
    const updatedMovies = JSON.stringify(filteredMovies, null, 2);
    await fs.writeFile(moviePath, updatedMovies);
    res.status(204).end();

  } catch (error) {
    res.status(500).send({ message: error.message })
  }
});




module.exports = app;