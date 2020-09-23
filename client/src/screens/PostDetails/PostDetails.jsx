import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../services/posts";
import Layout from "../../components/shared/Layout/Layout";

const PostDetails = (props) => {
  const [post, setPost] = useState(null);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      const post = await getPost(id);
      console.log(getPost)
      setPost(post);
      setLoaded(true);
    }
    fetchPost()
  }, [id]);

  if (!isLoaded) {
    return <h1>... not loading</h1>;
  }

  // const posts = () => {
  //   return (
  //     <div className="single-post">
  //     <ul>
  //       <li>{post.title}</li>
  //         <img src={post.imgURL} alt='robocophousinggames' />
  //         <li>{post.content}</li>
  //     </ul>
  //     </div>
  //   )
  // };

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
        </div>
      </div>
    </Layout>
  );
};
  

export default PostDetails;
