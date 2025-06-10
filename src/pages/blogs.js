import React, { useEffect, useState }  from 'react';
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import BlogBg from '../components/blog-bg';
import GradientPosition from '../components/gradient-position';
import Breadcrumb from '../components/common/breadcrumb';
import BlogArea from '../components/blog/blog-area';
import axios from 'axios';

const BlogPage = () => {
  const [Data, setData] = useState();
  useEffect( () => {
    const lang ='EN'
    const url =`https://raw.githubusercontent.com/artafps/artafps/main/configs/Config-Web-${lang}.json`
   axios.get(url).then(res=>{
    setData(res.data)
    console.log(res.data)
   }).catch(err=>console.log(err))
  }, []);
  return (
    <Layout Data = {Data} blog_page={true}>
      <GradientPosition/>
      <BlogBg/>
      <Breadcrumb title={Data?Data.Blog.Title:null}/>
      <BlogArea Data = {Data}/>
    </Layout>
  )
}
export default BlogPage;

export const Head = () => <Seo title="Blogs" />
