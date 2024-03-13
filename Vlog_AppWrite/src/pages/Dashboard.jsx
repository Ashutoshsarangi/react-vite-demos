import { useEffect, useState } from "react";
import database from "../appwrite/database";

const Dashboard = (props) => {
  const [posts, setPosts] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const result = await database.getAllDocuments();
        setPosts(result);
        console.log("result to show ---> ", result);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div>
      <h1>No of Active Posts are {posts.total || 0}</h1>
      {posts?.documents?.map((post) => (
        <div key={post.$id}>
          <img src={post.featuredImage} />
          <p>Title:- {post.title}</p>
          <p>Content:- {post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
