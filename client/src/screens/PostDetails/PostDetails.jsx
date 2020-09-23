import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost, deletePost } from "../../services/posts";
import Layout from "../../components/shared/Layout/Layout";

const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      console.log(getPost);
      setPost(post);
      setLoaded(true);
    };
    fetchPost();
  }, [id]);

  if (!isLoaded) {
    return <h1>... not loading</h1>;
  }

  return (
    <Layout>

      <div className="post-details">
        <div className="single-post">
          <ul>
          <li className="title">{post.title}</li>
            <img
              src={post.imgURL}
              className="single-post-image"
              alt="robocophousinggames" />
          <li className="content">{post.content}</li>
          </ul>

      <div className="single-post">
        <ul>
          <li>{post.title}</li>
          <img src={post.imgURL} alt="robocophousinggames" />
          <li>{post.content}</li>
        </ul>
        <div className="button-container">
          <button className="edit-button">
            <Link className="edit-link" to={`/posts/${post._id}/edit`}>
              Edit
            </Link>
          </button>
          <button
            className="delete-button"
            onClick={() => deletePost(post._id)}
          >
            Delete
          </button>

        </div>
      </div>
    </Layout>
  );
};

export default PostDetails;
