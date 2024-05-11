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

  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    // Trim the text to the maximum length
    const truncatedText = text.substr(0, maxLength);
    // Re-trim if we are in the middle of a word
    return (
      truncatedText.substr(
        0,
        Math.min(truncatedText.length, truncatedText.lastIndexOf(" "))
      ) + "..."
    );
  };

  if (loading) {
    return <div className="blogcard-container">Loading...</div>;
  }

  if (error) {
    return <div className="blogcard-container">Error: {error}</div>;
  }

  return (
    <div className="blogcard-container">
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
                {/* Truncate the description to approximately 150 words */}
                <div
                  className="blogcard-description"
                  dangerouslySetInnerHTML={{
                    __html: truncateText(post.description, 150),
                  }}
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
