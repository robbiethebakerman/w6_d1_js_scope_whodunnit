// # Scope Homework: Who Dunnit
//
// ### Learning Objectives
//
// - Understand function scope
// - Know the difference in between the let and const keywords
//
// ## Brief
//
// Using your knowledge about scope and variable declarations in JavaScript, look at the following code snippets and predict what the output or error will be and why. Copy the following episodes into a JavaScript file and add comments under each one detailing the reason for your predicted output.

// ### MVP

// #### Episode 1

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// };
//
// const declareMurderer = function() {
//   return `The murderer is ${scenario.murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Prints out 'The murderer is Miss Scarlet.' to the console.
// verdict is available to console.log...
// devclareMurderer is available to const verdict = ...
// scenario is available to const declareMurderer

// #### Episode 2

// const murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Gives error that constant value cannot be reassigned
// changeMurderer is run and this attempts to reassign the value of murderer, which is a constant

// #### Episode 3

// let murderer = 'Professor Plum';
//
// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }
//
// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
//
// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);

// Prints out 'First Verdict: Mrs. Peacock' and 'Second Verdict: Professor Plum' to the console
// In declareMurderer function, the local variable let murderer is assigned 'Mrs. Peacock' within the function {}s only
// This is returned and printed out via console.log
// In the second console.log, the const secondVerdict is used
// secondVerdict is assigned a string with murderer, and cannot see the assignment of 'Mrs. Peacock' within the function {}s, only the assignment of 'Professor Plum'

// #### Episode 4

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';
//
// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
//
// const suspects = declareAllSuspects();
// console.log(suspects);
// console.log(`Suspect three is ${suspectThree}.`);

// Prints out 'The suspects are Miss Scarlet, Professor Plum, Colonel Mustard' and then 'Suspect three is Mrs. Peacock.'
// Within declareAllSuspects, suspectThree is assigned to 'Colonel Mustard' with let
// In the final console.log, the above assignment is not visible, it can only see the previous assignment with let to 'Mrs. Peacock'

// #### Episode 5

// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };
//
// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }
//
// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }
//
// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);

// Prints out 'The weapon is the Revolver.' to the console
// changeWeapon changes the weapon in the object assigned to the scenario constant (to 'Revolver')
// This is allowed because it is not changing which object is assigned to the scenario constant
// declareWeapon prints out the weapon in the object assigned to the scenario constant

// #### Episode 6

// let murderer = 'Colonel Mustard';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prints out 'The murderer is Mrs. White' to the console
// changeMurderer is run. This initally changes murderer globally to Mr. Green,
// then changes it globally again to Mrs.White.
// The fact it is in a function within a function is irrelevant because the assignment is global

// #### Episode 7

// let murderer = 'Professor Plum';
//
// const changeMurderer = function() {
//   murderer = 'Mr. Green';
//
//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';
//
//     const unexpectedOutcome = function() {
//       murderer = 'Miss Scarlet';
//     }
//
//     unexpectedOutcome();
//   }
//
//   plotTwist();
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// Prints out 'The murderer is Miss Scarlet' to the console
// murder is assigned with let to 'Professor Plum', then changeMurderer is run
// murder is reassigned globally to 'Mr Green',
// then assigned within the plotTwist function only (using let) to 'Colonel Mustard'
// then reassigned globally within the plotTwist function to Miss Scarlet

// INCORRECT - Prints out 'The murderer is Mr Green'.
// Not realy sure why, unless murderer = 'Miss Scarlet' is subject to function scope
// Is it because within the plotTwist function,
// the murderer = "Miss Scarlet" assignment is only changing the value of a new local variable called murderer,
// initialised using let murderer = 'Colonel Mustard',
// and not the value of the murderer variable assigned outside the block to 'Professor Plum' and then 'Mr Green'?

// #### Episode 8

// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };
//
// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';
//
//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }
//
//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }
//
//     unexpectedOutcome('Colonel Mustard');
//   }
//
//   plotTwist('Dining Room');
// }
//
// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }
//
// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);

// Prints out 'The weapon is Candle Stick' to the console
// changeScenario is run. It sets murderer to 'Mrs. Peacock' and room to 'Dining Room'
// It defines and then runs plotTwist with the argument 'Dining Room'
// plotTwist sets murderer to 'Colonel Mustard' because scenario.room === 'Dining Room'
// plotTwist then defines and then runs unexpectedOutcome with the argument 'Colonel Mustard'
// unexpectedOutcome sets scenario.weapon to 'Candle Stick', if scenario.murderer === 'Colonel Mustard', which it does

// #### Episode 9

// let murderer = 'Professor Plum';
//
// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';
// }
//
// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }
//
// const verdict = declareMurderer();
// console.log(verdict);

// Prints out 'The murderer is Professor Plum' to the console
// murderer is assigned within the if block to Mrs. Peacock,
// but outside the block, the only assignment is to Professor Plum

// ### Extensions
//
// Make up your own episode!
