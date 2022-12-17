const persona = {
  name: "Mate",
  lastname: "Naran",
  age: 3,
  country: "Arg",
};

//console.log("Object:", persona, "\n");
//console.log("Keys:", Object.keys(persona), "\n");
//console.log("Values:", Object.values(persona), "\n");
//console.log("Entries:", Object.entries(persona), "\n");

/* Activity class by me */

const teams = [
  {
    argentina: 2,
    brasil: 5,
    uruguay: 2,
  },
  {
    inglaterra: 2,
    italia: 3,
    alemania: 4,
  },
];

const teamsNames = teams.map((team) => Object.keys(team));
console.log("Teams names:", teamsNames);

const totalCoups = teams
  .map((team) => Object.values(team))
  .flat()
  .reduce((acc, cur) => acc + cur, 0);
console.log("Total coups:", totalCoups);
