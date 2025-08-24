// Task 3: Readonly property

interface User {
  readonly id: string;
  name: string;
  age: number;
  active: boolean;
}

const user: User = { 
  id: "1", 
  name: "Charlie", 
  age: 25, 
  active: true 
};

console.log(user);
console.log(`User ${user.name} is ${user.active ? 'active' : 'inactive'}`);

// user.id = "2"; // Error: read-only property

export { user, User };