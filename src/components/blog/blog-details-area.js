import { Link } from 'gatsby';
import Markdown from 'markdown-to-jsx';
import React from 'react';

const BlogDetailsArea = ({Blog}) => {
  return (
    <section className="blog-area blog-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 container">
            <div className="blog-post-item">
              <div className="blog-post-thumb">
                <img src={Blog?Blog.ImageURI:null}  alt="img" style={{width:'100%'}} />
              </div>
              <div className="blog-post-content blog-details-content">
                <div className="blog-post-meta">
                  <ul className="list-wrap">
                    <li><i className="far fa-user"></i><Link to="/blog">ARTA FPS</Link></li>
                    <li><i className="far fa-calendar-alt"></i>{Blog?Blog.Date.split('T')[0]:""}</li>
                  </ul>
                </div>
                <Markdown>{Blog?Blog.Content:""}</Markdown>
                <div className="blog-details-bottom">
                  <div className="row">
                    <div className="col-xl-6 col-md-7">
                      <div className="tg-post-tag">
                        <h5 className="tag-title">Post Lables :</h5>
                        <ul className="list-wrap mb-0">
                          {Blog?Blog.Lable.split(',').map(item => <li><a href="" rel="tag">{item}</a></li>):null}
                        </ul>
                      </div>
                      <br/>
                      <div className="tg-post-tag">
                        <h5 className="tag-title">Post Categories :</h5>
                        <ul className="list-wrap mb-0">
                          {Blog?Blog.Category.split(',').map(item => <li><a href="" rel="tag">{item}</a></li>):null}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default BlogDetailsArea;