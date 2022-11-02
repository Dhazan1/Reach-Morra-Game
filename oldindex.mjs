import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib({REACH_N0_WARN:'Y'});

const startingBalance = await stdlib.parseCurrency(100);
const acctAlice= await stdlib.newTestAccounts(startingBalance);
const acctBob=await stdlib.newTestAccounts(startingBalance);

const fmt=(x)=>stdlib.formatCurrency(x,4);
const getBalance=async(person)=> await fmt(stdlib.getBalance(person));
const beforeAlice=await getBalance(acctAlice);
const beforeBob =await getBalance(acctAlice);

const contractAlice=  acctAlice.contract(backend);
const contractBob=acctBob.contract(backend,contractAlice.getInfo())

const HAND=["ROCK","PAPER","SCISSORS"];
const OUTCOME=["Bob wins","draw","Alice wins"];

const Player=(person)=>({
  ...stdlib.hasRandom,
  showHand:()=>{
    const hand=Math.floor(Math.random()*3);
//    console.log(`${person} Played ${HAND[hand]}`);
    return hand;
  },
  getOutcome:(outcome)=>{
    console.log(`${person} saw outcome ${OUTCOME[outcome]}`);
  },
  informTimeout:()=>{
    console.log(`${person} observed a timeout`)
  }
});

console.log('Starting backends...');

await Promise.all(
 
  contractAlice.p.Alice({
    ...Player('Alice'),
    wager: stdlib.parseCurrency(5 ),
    deadline:10, //time duration, not a token
  } ),

  contractBob.p.Bob({
    ...Player('Bob'),
    acceptWager: async(amt)=>{
      // Test the condition Bob does not accept wager
      // if(Math.random()<=0.5)
      // {
      //   for (let i=0;i<10,i++;)
      //   {
      //     console.log(`Bob takes his sweet time....`);
      //     await stdlib.wait(1);
      //   }
      // }
      console.log(`Bob accept the wager of ${fmt(amt)}` );
    }
  })
);

const afterAlice=await getBalance(acctAlice);
const afterBob=await getBalance(acctBob);

console.log(`Alice went from ${beforeAlice} to ${afterAlice}`);
console.log(`Bob went from ${beforeBob} to ${afterBob}`);

console.log('Goodbye, Alice and Bob!');


// const [ accAlice, accBob ] =
//   await stdlib.newTestAccounts(2, startingBalance);
// console.log('Hello, Alice and Bob!');

// console.log('Launching...');
// const ctcAlice = accAlice.contract(backend);
// const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

// await Promise.all([
//   backend.Alice(ctcAlice, {
//     ...stdlib.hasRandom,
//     // implement Alice's interact object here
//   }),
//   backend.Bob(ctcBob, {
//     ...stdlib.hasRandom,
//     // implement Bob's interact object here
//   }),
// ]);
