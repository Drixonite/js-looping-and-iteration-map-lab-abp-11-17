// // Code your solution in this file.

function lowerCaseDrivers (list) {
  return list.map(function(driver){
    return driver.toLowerCase();
  });
}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];
    return { firstName: driverFirst, lastName: driverLast };
  });
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}

//  * `attributesToPhrase` - this function takes an array of drivers as JavaScript objects and returns a
// string saying `"<NAME OF DRIVER> is from <HOMETOWN>"` for each JavaScript object in the array.
// Note that between the `<` and `>` we are looking for the value stored in the `name` and `hometown`
// object attributes, not the strings `"DRIVER"` or `"HOMETOWN"`.
