// // Code your solution in this file.


// function lowerCaseDrivers (list) {
//   return list.map(function (driver) {
//     return driver.toLowerCase();
//   });
// }
function lowerCaseDrivers (list) {
  return list.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes(){

}

function attributesToPhrase(){

}
// You'll be writing three functions:
//  * `lowerCaseDrivers` - this function takes an array of drivers, and returns an array of the drivers names
// in lowercase.
//  * `nameToAttributes` - this function takes an array of drivers with their first and last name separated
// by a space, and returns an array of JavaScript objects with `firstName` and `lastName` attributes.
//  * `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a
// string saying `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array.
// Note that between the `<` and `>` we are looking for the value stored in the `name` and `hometown`
// object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.
