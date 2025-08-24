// Task 20: Axios with posts

import axios from "axios";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const response = await axios.get<Post[]>("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const logThreePosts = async (): Promise<void> => {
  try {
    const posts = await fetchPosts();
    
    const firstThreePosts = posts.slice(0, 3);
    
    firstThreePosts.forEach((post, index) => {
      console.log(`\n=== Post ${index + 1} ===`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
};

async function getPostsByUser(userId: number): Promise<Post[]> {
  const posts = await fetchPosts();
  return posts.filter(post => post.userId === userId);
}

async function getPostTitles(): Promise<string[]> {
  const posts = await fetchPosts();
  return posts.map(post => post.title);
}

async function findPostById(postId: number): Promise<Post | undefined> {
  const posts = await fetchPosts();
  return posts.find(post => post.id === postId);
}

async function getPostStatistics(): Promise<void> {
  const posts = await fetchPosts();
  
  const totalPosts = posts.length;
  const uniqueUsers = new Set(posts.map(p => p.userId)).size;
  const avgTitleLength = posts.reduce((sum, post) => sum + post.title.length, 0) / totalPosts;
  const avgBodyLength = posts.reduce((sum, post) => sum + post.body.length, 0) / totalPosts;
  
  console.log("\n=== Post Statistics ===");
  console.log(`Total posts: ${totalPosts}`);
  console.log(`Unique users: ${uniqueUsers}`);
  console.log(`Average title length: ${avgTitleLength.toFixed(2)} characters`);
  console.log(`Average body length: ${avgBodyLength.toFixed(2)} characters`);
}

async function createPost(title: string, body: string, userId: number): Promise<Post> {
  const response = await axios.post<Post>(
    "https://jsonplaceholder.typicode.com/posts",
    { title, body, userId }
  );
  console.log("Created new post:", response.data);
  return response.data;
}

logThreePosts();
getPostStatistics();
getPostsByUser(1).then(posts => 
  console.log(`\nUser 1 has ${posts.length} posts`)
);

export { 
  fetchPosts, 
  logThreePosts, 
  Post, 
  getPostsByUser, 
  getPostTitles, 
  findPostById, 
  getPostStatistics,
  createPost 
};