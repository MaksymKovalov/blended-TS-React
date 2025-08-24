// Task 18: Axios with users list

import axios from "axios";
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
  const response = await axios.get<User[]>("https://jsonplaceholder.typicode.com/users");
  return response.data;
};

const getUsers = async (): Promise<void> => {
  const users = await fetchUsers();
  console.log(users);
  
  users.forEach((user) => {
    console.log(`${user.id}. ${user.name} - ${user.email}`);
  });
};

async function getUserCompanies(): Promise<string[]> {
  const users = await fetchUsers();
  return users.map(user => user.company.name);
}

async function findUserByUsername(username: string): Promise<User | undefined> {
  const users = await fetchUsers();
  return users.find(user => user.username === username);
}

async function safeGetUsers(): Promise<User[] | null> {
  try {
    const users = await fetchUsers();
    console.log(`Successfully fetched ${users.length} users`);
    return users;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.message);
      console.error("Status:", error.response?.status);
    } else {
      console.error("Unknown error:", error);
    }
    return null;
  }
}

getUsers();
safeGetUsers();

export { fetchUsers, getUsers, User, getUserCompanies, findUserByUsername, safeGetUsers };