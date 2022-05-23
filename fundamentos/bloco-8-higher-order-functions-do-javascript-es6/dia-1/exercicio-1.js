const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome:  -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome:  -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome:  -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

const nameEmail = (employeeName) => {
  const email = employeeName.toLowerCase().replace(' ', '_');
  return { employeeName, email: `${email}@trybe.com` };
}
  console.log(newEmployees(nameEmail))