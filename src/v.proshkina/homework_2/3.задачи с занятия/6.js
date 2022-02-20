function findMinAndMaxAge(array) {
  let sortedUsers = array.sort((userA, userB) => {
    return userA.age - userB.age;
  });

  let minAgeUsers = [];
  let maxAgeUsers = [];

  let currentMinAge = sortedUsers[0].age;
  minAgeUsers.push(sortedUsers[0].name);
  for (let i = 1; i < sortedUsers.length; i++) {
    if (currentMinAge === sortedUsers[i].age) {
      minAgeUsers.push(sortedUsers[i].name);
      currentMinAge = sortedUsers[i].age;
    }
  }

  let currentMaxAge = sortedUsers[sortedUsers.length - 1].age;
  maxAgeUsers.push(sortedUsers[sortedUsers.length - 1].name);

  for (let i = sortedUsers.length - 2; i >= 0; i--) {
    if (currentMaxAge === sortedUsers[i].age) {
      maxAgeUsers.push(sortedUsers[i].name);
      currentMaxAge = sortedUsers[i].age;
    }
  }

  console.log(minAgeUsers);
  console.log(maxAgeUsers);

  return `самый(-ые) младший(-ие) пользователь(-ли) (${currentMinAge} лет): ${minAgeUsers.join(
    ", "
  )};\nсамый(-ые) старший(-ие) пользователь(-ли) (${currentMaxAge} лет): ${maxAgeUsers}.`;
}

console.log(
  findMinAndMaxAge([
    { name: "Бенджамин", age: 63 },
    { name: "Бронислав", age: 67 },
    { name: "Богдан", age: 41 },
    { name: "Борис", age: 52 },
    { name: "Бронислав", age: 40 },
    { name: "Бенджамин", age: 55 },
    { name: "Богдан", age: 22 },
    { name: "Богдан", age: 61 },
    { name: "Булаг", age: 64 },
    { name: "Булаг", age: 66 },
    { name: "Бенджамин", age: 48 },
    { name: "Богдан", age: 20 },
    { name: "Богдан", age: 20 },
    { name: "Бенджамин", age: 50 },
    { name: "Булат", age: 29 },
    { name: "Булаг", age: 58 },
    { name: "Бенджамин", age: 62 },
    { name: "Бенджамин", age: 38 },
    { name: "Булат", age: 37 },
    { name: "Борис", age: 25 },
    { name: "Богдан", age: 51 },
    { name: "Бенджамин", age: 33 },
    { name: "Булат", age: 40 },
    { name: "Булаг", age: 37 },
    { name: "Булаг", age: 58 },
    { name: "Бронислав", age: 52 },
    { name: "Булат", age: 48 },
    { name: "Бенджамин", age: 60 },
    { name: "Богдан", age: 27 },
    { name: "Булаг", age: 45 },
    { name: "Бахрам", age: 58 },
    { name: "Бенджамин", age: 66 },
    { name: "Бахрам", age: 32 },
    { name: "Бахрам", age: 42 },
    { name: "Бенджамин", age: 23 },
    { name: "Борислав", age: 46 },
    { name: "Бронислав", age: 20 },
    { name: "Борис", age: 34 },
    { name: "Богдан", age: 33 },
    { name: "Борислав", age: 30 },
    { name: "Богдан", age: 51 },
    { name: "Булаг", age: 41 },
    { name: "Борислав", age: 35 },
    { name: "Борис", age: 60 },
    { name: "Бенджамин", age: 64 },
    { name: "Булаг", age: 63 },
    { name: "Булат", age: 59 },
    { name: "Булат", age: 20 },
    { name: "Булаг", age: 60 },
    { name: "Бенджамин", age: 47 },
  ])
);
