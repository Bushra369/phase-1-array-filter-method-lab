const drivers = [
  { name: "Bushra", hometown: "New York" },
  { name: "Anes", hometown: "Moscow" },
  { name: "Shiraz", hometown: "Berlin" },
  { name: "Wssim", hometown: "Paris" },
];

function findMatching(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase() === query.toLowerCase());
}

function fuzzyMatch(drivers, query) {
  return drivers.filter(driver => driver.toLowerCase().startsWith(query.toLowerCase()));
}

function matchName(drivers, query) {
  return drivers.filter(driver => driver.name.toLowerCase() === query.toLowerCase());
}



