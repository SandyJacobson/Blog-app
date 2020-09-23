import React, { useState } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import { Redirect } from 'react-router-dom'
import { createPost } from '../../services/posts'

const PostCreate = (props) => {

    const [post, setPost] = useState({
            title: '',
            content: '',
            imgURL: '',
        })

    const [isCreated, setCreated] = useState(false)

    const handleChange = (event) => {
        const { name, value } = event.target
        setPost({
                ...post,
                [name]: value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const created = await createPost(post)
        setCreated({ created })
    }

    if (isCreated) {
        return <Redirect to={`/`} />
    }
    return (
        <Layout>
            <form className="create-form" onSubmit={handleSubmit}>
          <label>Title: </label>      
          <input
                    className="input-title"
                    placeholder='Title'
                    value={post.title}
                    name='title'
                    required
                    autoFocus
                    onChange={handleChange}
          />
          <label>Content: </label>
                <textarea
                    className="textarea-content"
                    rows={10}
                    placeholder='Content'
                    value={post.content}
                    name='content'
                    required
                    onChange={handleChange}
          />
          <label>ImgURL: </label>
                <input
                    className="input-image-link"
                    placeholder='Image Link'
                    value={post.imgURL}
                    name='imgURL'
                    required
                    onChange={handleChange}
                />
                <button type='submit' className="submit-button">Submit</button>
            </form>
        </Layout>
    )
}

export default PostCreate