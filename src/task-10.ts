// Task 10: Array transformation

interface UserObject {
  id: number;
  name: string;
}

function toUserObjects(names: string[]): UserObject[] {
  return names.map((name, index) => ({
    id: index + 1,
    name: name
  }));
}

const users = ["alice", "bob", "charlie"];

const userObjects = toUserObjects(users);
console.log(userObjects);

const firstUser: UserObject = userObjects[0];
console.log(`First user: ID=${firstUser.id}, Name=${firstUser.name}`);

const moreUsers = toUserObjects(["diana", "eric", "fiona"]);
console.log(moreUsers);

export { toUserObjects, UserObject, users, userObjects };