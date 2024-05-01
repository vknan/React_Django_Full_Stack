import React, { useState, useEffect } from "react";
import "./blogcard.css";

const Blogcard = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedPost, setSelectedPost] = useState(null);

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

  const handleReadMore = async (postId) => {
    try {
      const response = await fetch(
        `https://vknan.pythonanywhere.com/api/posts/${postId}?format=json`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch post details");
      }
      const postData = await response.json();
      setSelectedPost(postData);
    } catch (error) {
      setError(error.message);
    }
  };

  const renderHTML = (htmlString) => {
    // Function to render HTML string safely
    return { __html: htmlString };
  };

  if (loading) {
    return <div className="blogcard-container">Loading...</div>;
  }

  if (error) {
    return <div className="blogcard-container">Error: {error}</div>;
  }

  if (selectedPost) {
    return (
      <div className="blogcard-container">
        <div className="blogcard-selected-post">
          <h2>{selectedPost.title}</h2>
          <div dangerouslySetInnerHTML={renderHTML(selectedPost.content)} />
          <button
            className="blogcard-close"
            onClick={() => setSelectedPost(null)}
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blogcard-container">
      <h1 className="blogcard-heading">Blog</h1>
      <ul>
        {posts.map((post) => (
          <article className="blogcard-post" key={post.id}>
            <div>
              <img className="blogcard-thumbnail" src={post.thumbnail} alt="" />
            </div>

            <h2 className="blogcard-title">
              <a href={`/blog/${post.title}`}>{post.title}</a>
            </h2>

            <div className="blogcard-meta">
              <ul>
                <li className="blogcard-meta-item">
                  <i></i> <a>{post.user.username}</a>
                </li>
                <li className="blogcard-meta-item">
                  <i></i> <time>{post.posted_at}</time>
                </li>
                <li className="blogcard-meta-item">
                  <i></i> <a>{post.category.name}</a>
                </li>
              </ul>
            </div>

            <div>
              {/* Render truncated post description */}
              <p
                dangerouslySetInnerHTML={renderHTML(
                  post.description.substring(0, 150) + "..."
                )}
              />
              <div>
                <button
                  className="blogcard-readmore"
                  onClick={() => handleReadMore(post.id)}
                >
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </ul>
    </div>
  );
};

export default Blogcard;
