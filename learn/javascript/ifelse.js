// function getEuropeanQualificationStatus(leaguePosition) {
//   if (leaguePosition <= 4) {
//     return "Qualified for UEFA Champions League";
//   }
//   if (leaguePosition === 5) {
//     return "Qualified for UEFA Europa League";
//   }

//   if (leaguePosition === 6) {
//     return "Qualified for UEFA Conference League";
//   }

//   if (leaguePosition > 6 && leaguePosition <= 17) {
//     return "No European qualification";
//   }
//   if (leaguePosition >= 18 && leaguePosition <= 20) {
//     return "In relegation zone";
//   }
//   return "Invalid league position";
// }

// console.log(getEuropeanQualificationStatus(1));
// console.log(getEuropeanQualificationStatus(5));
// console.log(getEuropeanQualificationStatus(15));
// console.log(getEuropeanQualificationStatus(20));

const teams = [
  { name: "Manchester City", position: 6 },
  { name: "Manchester United", position: 16 },
  { name: "Chelsea", position: 4 },
  { name: "Fulham", position: 9 },
];

function checkEuropeanStatus(team) {
  if (team.position <= 4) {
    return `${team.name} - Qualified for UEFA Champions League`;
  }

  if (team.position === 5) {
    return `${team.name} - Qualified for UEFA Europa League`;
  }

  if (team.position === 6) {
    return `${team.name} - Qualified for UEFA Conference League`;
  }

  return `${team.name} - No European qualification`;
}

teams.forEach((team) => {
  console.log(checkEuropeanStatus(team));
});
