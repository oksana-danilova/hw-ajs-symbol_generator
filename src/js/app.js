import Bowerman from './bowerman.js';
import Swordsman from './swordsman.js';
import Magician from './magician.js';
import Daemon from './daemon.js';
import Undead from './undead.js';
import Team from './team';

let array = [
  new Bowerman('Jack'),
  new Swordsman('Jack'),
  new Magician('Jack'),
  new Daemon('Jack'),
  new Undead('Jack'),
  ];

let team = (new Team());
console.log(team);
team.add(array);
console.log(team);
console.log(team.get())
for (const person of team) {
  console.log(person);
}
console.log(team[Symbol.iterator]().next().value);