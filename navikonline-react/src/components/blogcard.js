import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./blogcard.css";

const Blogcard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://vknan.pythonanywhere.com/api/posts/?format=json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div className="blogcard-container">Loading...</div>;
  }

  if (error) {
    return <div className="blogcard-container">Error: {error}</div>;
  }

  return (
    <div className="blogcard-container">
      <h1 className="blogcard-heading">Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`} className="blogcard-post-link">
              <article className="blogcard-post">
                <div>
                  <img
                    className="blogcard-thumbnail"
                    src={post.thumbnail}
                    alt=""
                  />
                </div>

                <h2 className="blogcard-title">{post.title}</h2>
                <div className="blogcard-meta">
                  <ul>
                    <li className="blogcard-meta-item">
                      <i></i> {post.user.username}
                    </li>
                    <li className="blogcard-meta-item">
                      <i></i> {post.posted_at}
                    </li>
                    <li className="blogcard-meta-item">
                      <i></i> {post.category.name}
                    </li>
                  </ul>
                </div>

                <div
                  className="blogcard-description"
                  dangerouslySetInnerHTML={{ __html: post.description }}
                />

                <Link to={`/blog/${post.id}`} className="blogcard-read-more">
                  Read More
                </Link>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogcard;
