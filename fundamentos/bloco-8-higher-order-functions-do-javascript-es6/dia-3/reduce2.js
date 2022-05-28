const pessoas = [
  {
    nome: 'Matheus',
    idade: 30
  },
  {
    nome: 'Fernanda',
    idade: 33
  },
  {
    nome: 'Luiza',
    idade: 17
  },
  {
    nome: 'Geralda',
    idade: 56
  },
  {
    nome: 'Ricardo',
    idade: 56
  },
]

const listaAgrupada = pessoas.reduce((acc, pessoa) =>{
  const maiorOuMenor31 = pessoa.idade >= 31 ? 'maiores' : 'menores';

  acc[maiorOuMenor31].push(pessoa);
  return acc;
}, {maiores: [], menores: []}
)

console.log(listaAgrupada);
