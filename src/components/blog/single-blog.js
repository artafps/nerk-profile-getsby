import { Link } from "gatsby";
import Markdown from "markdown-to-jsx";
import React from "react";

const SingleBlog = ({ blog }) => {
  return (
    <div className="blog-post-item">
      <div className="blog-post-thumb">
        <Link to="/blog-details">
          <img src={blog.ImageURI} alt="img"  />
        </Link>
      </div>
      <div className="blog-post-content">
        <div className="blog-post-meta">
          <ul className="list-wrap">
            <li>
              <i className="far fa-user"></i>
              <Link to="/blog">ARTA FPS</Link>
            </li>
            <li>
              <i className="far fa-calendar-alt"></i>
              {blog.Date.split('T')[0]}
            </li>
            
          </ul>
        </div>
        <h2 className="title">
          <Link to={"/blog/?id="+blog.h1}>{blog.h1}</Link>
        </h2>
        <p><Markdown>{blog.Content.slice(2, 440)}</Markdown></p>
      </div>
    </div>
  )
}

export default SingleBlog
