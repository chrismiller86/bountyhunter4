import React from "react"
import BlogPost from "./BlogPost"
import listOfBlogs from "./listOfBlogs"

function BlogList() {

    //const blogComponents = listOfBlogs.map(item => <BlogPost each={item} />)

    const blogComponents = listOfBlogs.map(function (item) {
        return (

            <BlogPost each={item} />

        )
    })
    return (
        <div>
            {blogComponents}
        </div>

    )

}

export default BlogList

