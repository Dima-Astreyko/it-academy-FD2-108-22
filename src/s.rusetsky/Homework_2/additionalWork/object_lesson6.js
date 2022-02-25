const users = [
  { name: '���������', age: 63 },
  { name: '���������', age: 67 },
  { name: '������', age: 41 },
  { name: '�����', age: 52 },
  { name: '���������', age: 40 },
  { name: '���������', age: 55 },
  { name: '������', age: 22 },
  { name: '������', age: 61 },
  { name: '�����', age: 64 },
  { name: '�����', age: 66 },
  { name: '���������', age: 48 },
  { name: '������', age: 20 },
  { name: '������', age: 20 },
  { name: '���������', age: 50 },
  { name: '�����', age: 29 },
  { name: '�����', age: 58 },
  { name: '���������', age: 62 },
  { name: '���������', age: 38 },
  { name: '�����', age: 37 },
  { name: '�����', age: 25 },
  { name: '������', age: 51 },
  { name: '���������', age: 33 },
  { name: '�����', age: 40 },
  { name: '�����', age: 37 },
  { name: '�����', age: 58 },
  { name: '���������', age: 52 },
  { name: '�����', age: 48 },
  { name: '���������', age: 60 },
  { name: '������', age: 27 },
  { name: '�����', age: 45 },
  { name: '������', age: 58 },
  { name: '���������', age: 66 },
  { name: '������', age: 32 },
  { name: '������', age: 42 },
  { name: '���������', age: 23 },
  { name: '��������', age: 46 },
  { name: '���������', age: 20 },
  { name: '�����', age: 34 },
  { name: '������', age: 33 },
  { name: '��������', age: 30 },
  { name: '������', age: 51 },
  { name: '�����', age: 41 },
  { name: '��������', age: 35 },
  { name: '�����', age: 60 },
  { name: '���������', age: 64 },
  { name: '�����', age: 63 },
  { name: '�����', age: 59 },
  { name: '�����', age: 20 },
  { name: '�����', age: 60 },
  { name: '���������', age: 47 }
]

function sortUsers(object) {
  object.sort(function (a, b) {
  if (a.age > b.age) {
    return 1;
  }
  if (a.age < b.age) {
    return -1;
  }
  return 0;
});
  return object;
}

function getAverageAge(users) {
  return users.reduce((accum, user) => accum + user.age, 0) / users.length;
}

let youngestUser = users.reduce((youngest, user) => {
  return (youngest.age < user.age) ? youngest : user;
});

let oldestUser = users.reduce((oldest, user) => {
  return (oldest.age > user.age) ? oldest : user;
});

console.log(youngestUser)
console.log(oldestUser)
console.log(getAverageAge(users));
console.log(sortUsers(users));









