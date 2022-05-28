//Using REDUCE
var pilots = [
  {
    id: 10,
    name: "Poe Dameron",
    years: 14,
  },
  {
    id: 2,
    name: "Temmin 'Snap' Wexley",
    years: 30,
  },
  {
    id: 41,
    name: "Tallissan Lintra",
    years: 16,
  },
  {
    id: 99,
    name: "Ello Asty",
    years: 22,
  }
];

const totalYears = pilots.reduce((acc, pilot)=>acc + pilot.years, 0);
console.log(totalYears);

const mostExpPilot = pilots.reduce((oldest, pilot)=> (oldest.years || 0) > pilot.years ? oldest : pilot);
console.log(mostExpPilot);