// arquivo get talker com uma route, que ainda não sei como funciona

// // const fs = require('fs').promises;
// // const { join } = require('path');
// const express = require('express');
// // const bodyParser = require('body-parser');
// const router = express.Router();
// const { readFile } = require('./fsFile');

// // const app = express();
// // app.use(bodyParser.json());

// const HTTP_OK_STATUS = 200;

// router.get('/talker', async (_req, res) => {
//   const talkers = await readFile();
//   res.status(HTTP_OK_STATUS).json({ talkers });
// });


// const searchTalkerByName = async (nameInputed) => {
//   const talkers = await readFile();  
//   const search = talkers.filter((talker) => talker.name.includes(nameInputed));
//   if (search === undefined || search.length === 0) return [];
//   return search;
// };



// primeira tentativa
// app.get('/talker/search', tokenValidate, async (req, res) => {
//   const { q } = req.query;
//   // if (q === undefined) {
//   //   if (!q) {
//   //   return res.status(HTTP_OK_STATUS).json(await readFile());
//   // }
//   // const talkers = await readFile();
//   // const filterTalkers = talkers.filter((talker) => talker.name.includes(q));
//   const searching = await searchTalkerByName(q);
//   return res.status(HTTP_OK_STATUS).json(searching);
//   // return res.status(HTTP_OK_STATUS).json(filterTalkers);
// });