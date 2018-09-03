function lowerCaseDrivers (list) {
  return list.map(function (driver) {
    return driver.toLowerCase();
  });
}

function attributesToPhrase (list) {
  return list.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}

function nameToAttributes (list) {
  return list.map(function (driver) {
    const driverFirst = driver.split(' ')[0];
    const driverLast = driver.split(' ')[1];

    return { firstName: driverFirst, lastName: driverLast };
  });
<<<<<<< HEAD
}
=======
}
>>>>>>> 775089e27a8a77a6ad0d9ce93c14c2e1f222d9e8
