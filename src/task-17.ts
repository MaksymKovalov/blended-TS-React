// Task 17: Fetch API with typing
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: User[] = await response.json();
  return data;
};

fetchUsers().then((users) => {
  console.log("Fetched users:", users);
  
  users.forEach((user) => {
    console.log(`${user.name} (${user.email})`);
  });
});

async function getUsersByCity(city: string): Promise<User[]> {
  const users = await fetchUsers();
  return users.filter(user => user.address.city === city);
}

async function getUserEmails(): Promise<string[]> {
  const users = await fetchUsers();
  return users.map(user => user.email);
}

async function displayUsers(): Promise<void> {
  try {
    const users = await fetchUsers();
    console.log(`Total users: ${users.length}`);
    
    const firstUser = users[0];
    if (firstUser) {
      console.log(`First user: ${firstUser.name} from ${firstUser.address.city}`);
    }
  } catch (error) {
    console.error("Error fetching users:", error);
  }
}

displayUsers();

export { fetchUsers, User, getUsersByCity, getUserEmails, displayUsers };