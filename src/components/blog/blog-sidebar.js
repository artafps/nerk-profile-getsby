import { Link } from 'gatsby';
import React from 'react';

const BlogSidebar = ({ setSearchBox,Data }) => {
  return (
    <aside className="blog-sidebar">
      <div className="widget">
        <h3 className="widget-title">Search Here</h3>
        <div className="sidebar-search-form position-relative">
          <form action="#">
            <input type="text" onChange={(e) => {setSearchBox(e.target.value)}} placeholder="Search" />
            <button type="submit"><i className="fas fa-search"></i></button>
          </form>
        </div>
      </div>
      {Data ? Data.Category.length > 0 ? <div className="widget widget_categories">
        <h3 className="widget-title">Categories</h3>
        <ul>
          {Data.Category.map(item => (
            <li><a>{item}</a></li>
          )
          )}
        </ul>
      </div> : null : null}
    
      {Data ? Data.Category.length > 0 ? <div className="widget widget_categories">
        <h3 className="widget-title">Lables</h3>
        <ul>
          {Data.Lable.map(item => (
            <li><a>{item}</a></li>
          )
          )}
        </ul>
      </div> : null : null}
    </aside>
  );
};

export default BlogSidebar;