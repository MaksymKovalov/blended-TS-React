// Task 19: Axios with single user

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

const fetchUser = async (userId: number): Promise<User> => {
  const response = await axios.get<User>(
    `https://jsonplaceholder.typicode.com/users/${userId}`
  );
  return response.data;
};

const getUserName = async (id: number): Promise<void> => {
  const user = await fetchUser(id);
  console.log(user.name);
};

async function getUserDetails(userId: number): Promise<string> {
  const user = await fetchUser(userId);
  return `
User Details:
- Name: ${user.name}
- Username: ${user.username}
- Email: ${user.email}
- Company: ${user.company.name}
- City: ${user.address.city}
- Website: ${user.website}
  `.trim();
}

async function compareUsers(userId1: number, userId2: number): Promise<void> {
  try {
    const [user1, user2] = await Promise.all([
      fetchUser(userId1),
      fetchUser(userId2)
    ]);
    
    console.log("User comparison:");
    console.log(`${user1.name} vs ${user2.name}`);
    console.log(`Cities: ${user1.address.city} vs ${user2.address.city}`);
    console.log(`Companies: ${user1.company.name} vs ${user2.company.name}`);
  } catch (error) {
    console.error("Error comparing users:", error);
  }
}

async function safeGetUser(userId: number): Promise<User | null> {
  try {
    const user = await fetchUser(userId);
    console.log(`User found: ${user.name}`);
    return user;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response?.status === 404) {
        console.error(`User with ID ${userId} not found`);
      } else {
        console.error(`Error fetching user: ${error.message}`);
      }
    } else {
      console.error("Unknown error:", error);
    }
    return null;
  }
}

getUserName(1);
getUserDetails(2).then(console.log);
compareUsers(1, 2);
safeGetUser(999); // Testing error handling with non-existent ID

export { fetchUser, getUserName, User, getUserDetails, compareUsers, safeGetUser };