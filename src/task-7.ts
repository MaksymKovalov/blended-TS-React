// Task 7: Interface for arrays

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "Alice", age: 30 },
  { name: "Bob", age: 25 },
];

users.push({ name: "Charlie", age: 35 });

console.log(users);

export { users, User };