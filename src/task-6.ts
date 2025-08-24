// Task 6: Optional properties

interface Address {
  city: string;
}

interface User {
  name: string;
  address?: Address;
}

const user: User = {
  name: "Alice",
  address: {
    city: "Kyiv"
  }
};

console.log(user.address?.city);

const userWithoutAddress: User = {
  name: "Bob"
};

console.log(userWithoutAddress.address?.city);

export { user, User, Address };