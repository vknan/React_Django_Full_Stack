import React, { useState, useEffect } from "react";
import "./blogcard.css";

const Blogcard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "http://127.0.0.1:8000/api/posts/?format=json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <article key={post.id}>
            <div>
              <img src={post.thumbnail} alt="" />
            </div>

            <h2>
              <a href={`/blog/${post.title}`}>{post.title}</a>
            </h2>

            <div>
              <ul>
                <li>
                  <i></i> <a>{post.user.username}</a>
                </li>
                <li>
                  <i></i>{" "}
                  <a>
                    <time>{post.posted_at}</time>
                  </a>
                </li>
                <li>
                  <i></i> <a>{post.category.name}</a>
                </li>
              </ul>
            </div>

            <div>
              <p>{post.description}</p>
              <div>
                <a href={`/blog/${post.title}`}>Read More</a>
              </div>
            </div>
          </article>
        ))}
      </ul>
    </div>
  );
};

export default Blogcard;
