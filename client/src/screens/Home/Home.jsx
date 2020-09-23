import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Layout from "../../components/shared/Layout/Layout";
import { getPosts } from "../../services/posts";
import './Home.css';

const Home = (props) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsAPI = await getPosts();
      setPosts(postsAPI);
    };
    fetchPosts();
  }, []);

  const mappedPosts = posts.map((post, idx) => {
    return (
      <div key={idx} className="single-post-home">
      <ul key={idx}>
        <li>{post.title}</li>
        <Link to="/posts/:id">
          <img src={post.imgURL} alt='cool' />
        </Link>
      </ul>
      </div>
    )
  });

  return (
    <div className="multi-post-container">
      <Layout>{mappedPosts}</Layout>
    </div>
  );
};

export default Home;
