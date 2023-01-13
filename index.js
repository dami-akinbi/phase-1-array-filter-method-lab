// Code your solution here
let listOfDriverNames;

// task 1
function findMatching(driverNames, nameString) {
  nameString = nameString.toLowerCase();
  return driverNames.filter((name) => name.toLowerCase() === nameString);
}
listOfDriverNames = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
console.log(findMatching(listOfDriverNames, "bright"));

// task 2
function fuzzyMatch(driverNames, nameString) {
  return driverNames.filter(
    (name) => name.substring(0, 2).toLowerCase() === nameString.toLowerCase()
  );
}
listOfDriverNames = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "bobby"];
console.log(fuzzyMatch(listOfDriverNames, "D"));

// task 3
function matchName(driverDetails, match) {
  let newList = driverDetails.filter((driver) => driver.name === match);
  return newList;
}
listOfDriverNames = [
  { name: "Bobby", hometown: "Pittsburgh" },
  { name: "Sammy", hometown: "New York" },
  { name: "Sally", hometown: "Cleveland" },
  { name: "Annette", hometown: "Los Angeles" },
  { name: "Bobby", hometown: "Tampa Bay" },
];
console.log(matchName(listOfDriverNames, "name"));
