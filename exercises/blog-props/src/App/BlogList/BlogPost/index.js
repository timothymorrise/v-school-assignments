//BLOG POST -- COMPONENT
//-------------------------------------------
import React from 'react'
import "./BlogPost.css"

function BlogPost(props) {
    let { title, subtitle, author, date } = props.data
    return (
        <article>
            <a className="blog-post-link" href="https://blackrockdigital.github.io/startbootstrap-clean-blog/post.html">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </a>
            <p>Posted by <a className="blog-post-author">{author}</a> on {date}</p>
        </article>
    )
}

export default BlogPost
