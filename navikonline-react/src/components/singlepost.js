import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./singlepost.css"; // Import CSS file for styling

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://vknan.pythonanywhere.com/api/posts/${postId}?format=json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const postData = await response.json();
        setPost(postData);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="singlepost-container">
      <h2 className="singlepost-title">{post.title}</h2>
      <p
        className="singlepost-description"
        dangerouslySetInnerHTML={{ __html: post.description }}
      />
      {/* Add additional post details here if needed */}
    </div>
  );
};

export default SinglePost;
