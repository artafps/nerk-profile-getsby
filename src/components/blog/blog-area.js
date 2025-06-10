import React, { useState } from "react"
import blog_data from "../../data/blog-data"
import BlogSidebar from "./blog-sidebar"
import SingleBlog from "./single-blog"
import checkWordInText from "../../utils/checker"

const BlogArea = ({ Data }) => {
  const [SearchBox, setSearchBox] = useState('');
  return (
    <section className="blog-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {Data ? Data.Blog.Arr.filter(item => checkWordInText(item.h1,SearchBox)).map((blog, i) => (
              <SingleBlog key={i} blog={blog} />
            )) : null}
          </div>
          <div className="col-lg-4">
            <BlogSidebar setSearchBox={setSearchBox} Data={Data} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogArea
