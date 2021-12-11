import React from "react"

function BlogPost(props) {
    return (
        <div>
            <p> Title: {props.each.title}</p>
            <p> Sub Title: {props.each.subTitle}</p>
            <p>Author: {props.each.author}</p>
            <p>Date: {props.each.date}</p>
        </div>
    )
}

export default BlogPost