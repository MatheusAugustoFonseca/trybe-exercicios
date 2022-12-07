// PARA TESTAR A CONEXÃO COM MYSQL
// const app = require('./app');
// const connection = require('./db/connection');

// const PORT = 3001;

// app.listen(PORT, async () => {
//   console.log(`API TrybeCash running on port: ${PORT}`);

//   const [ result ] = await connection.execute('SELECT 1');
//   if (result) {
//     console.log('MySQL connection is OK');
//   }
// })

//CONEXAO OK, REFATORA O CÓD PARA:
require('dotenv').config();
const app = require('./app');

const PORT = 3001;

app.listen(PORT, () => {
  console.log(`API TrybeCash está sendo executada na porta ${PORT}`);
  console.log(`Valor da variável de ambiente $USER: ${process.env.USER}`);
})