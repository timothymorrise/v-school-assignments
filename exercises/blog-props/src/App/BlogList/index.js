//BLOG LIST -- COMPONENT
//------------------------------------------
import React from 'react'

import BlogPost from "./BlogPost"

import "./BlogList.css"

function BlogList() {
    let blogData = [
        {
            title: "Man must explore, and this is exploration at its greatest",
            subtitle: "Problems look mighty small from 150 miles up",
            author: "Start Bootstrap",
            date: "September 24, 2017",
        },
        {
            title: "I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.",
            subtitle: "",
            author: "Start Bootstrap",
            date: "September 18, 2017",
        },
        {
            title: "Science has not yet mastered prophecy",
            subtitle: "We predict too much for the next year and yet far too little for the next ten.",
            author: "Start Bootstrap",
            date: "August 24, 2017",
        },
        {
            title: "Failure is not an option",
            subtitle: "Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
            author: "Startup Bootstrap",
            date: "July 8, 2017",
        },
    ]

    let blogComponents = blogData.map((blogPostData)=> {
        return <BlogPost data={blogPostData} />
    })

    return (
        <main>
            <div className="blog-list-wrapper">
                {blogComponents}
                <a className="blog-list-older-posts">
                    <p>OLDER POSTS &rarr;</p>
                </a>
                </div>
        </main>
    )
}

export default BlogList
