const person={
    alive:true
}

const musician={
    plays:true
}

musician.__proto__=person
console.log(musician.plays)
console.log(musician.alive)
Object.setPrototypeOf(musician,person)
const guitarist={
    strings:6,
    __proto__:musician
}

console.log(guitarist.alive)
console.log(guitarist.strings)
console.log(guitarist.plays)
console.log.log(guitarist.__proto__)


//object properties also supports