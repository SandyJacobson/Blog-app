import React, { useState } from "react";
import Layout from '../../components/shared/Layout/Layout'
import axios from "axios";

const Home = (props) => {
  const [posts, setPost] = useState({})
  return (
    <div>
      <Layout>
        <h1>Home Page</h1>
      </Layout>
    </div>
  );
};

export default Home;
