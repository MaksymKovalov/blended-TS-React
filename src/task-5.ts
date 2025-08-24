// Task 5: Function typing

interface CreateUserParams {
  name: string;
  age: number;
}

interface UserWithAdmin {
  name: string;
  age: number;
  isAdmin: boolean;
}

function createUser({ name, age }: CreateUserParams): UserWithAdmin {
  return {
    name,
    age,
    isAdmin: false
  };
}

const newUser = createUser({ name: "Alice", age: 30 });
console.log(newUser);

const anotherUser = createUser({ name: "Bob", age: 25 });
console.log(anotherUser);

export { createUser, CreateUserParams, UserWithAdmin };