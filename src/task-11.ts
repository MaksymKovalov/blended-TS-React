// Task 11: Custom and literal types

type User = {
  username: string;
  age: number;
  city?: string;
};

type Role = "admin" | "user" | "guest";

function createUserCard(user: User, role: Role): string {
  const city = user.city || "Unknown";
  return `${user.username} (${user.age}) — ${role} from ${city}`;
}

console.log(createUserCard({ username: "Anna", age: 25, city: "Kyiv" }, "admin"));
console.log(createUserCard({ username: "Max", age: 30 }, "guest"));
console.log(createUserCard({ username: "John", age: 28, city: "Lviv" }, "user"));

export { User, Role, createUserCard };