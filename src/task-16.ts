// Task 16: Promise with profile

interface Profile {
  username: string;
  age: number;
  isAdmin: boolean;
}

function fetchProfile(): Promise<Profile> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        username: "max_123", 
        age: 28, 
        isAdmin: true 
      });
    }, 1000);
  });
}

fetchProfile().then((profile) => {
  console.log(profile);
  console.log(`Username: ${profile.username}`);
  console.log(`Age: ${profile.age}`);
  console.log(`Is Admin: ${profile.isAdmin}`);
});

async function checkAdminAccess(): Promise<boolean> {
  const profile = await fetchProfile();
  
  if (profile.isAdmin) {
    console.log(`${profile.username} has admin access`);
    return true;
  } else {
    console.log(`${profile.username} does not have admin access`);
    return false;
  }
}

async function processProfile(): Promise<void> {
  try {
    const profile = await fetchProfile();
    
    if (profile.age >= 18) {
      console.log(`${profile.username} is an adult`);
    } else {
      console.log(`${profile.username} is a minor`);
    }
    
    const role = profile.isAdmin ? "Administrator" : "User";
    console.log(`Welcome, ${role} ${profile.username}!`);
  } catch (error) {
    console.error("Error fetching profile:", error);
  }
}

processProfile();
checkAdminAccess();

export { fetchProfile, Profile, checkAdminAccess, processProfile };