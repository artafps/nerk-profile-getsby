import React, { useEffect, useState } from "react";
import { Seo } from "../components/seo";
import Layout from "../layout/layout";
import BlogBg from "../components/blog-bg";
import GradientPosition from "../components/gradient-position";
import Breadcrumb from "../components/common/breadcrumb";
import BlogDetailsArea from "../components/blog/blog-details-area";
import { useLocation } from "@reach/router";
import axios from "axios";
import checkWordInText from "../utils/checker";
import { navigate } from 'gatsby';
const BlogDetailsPage = () => {
  const [Blog, setBlog] = useState();
  const [Data, setData] = useState();
  const location = useLocation(); 
  useEffect( () => {
    const lang ='EN'
    const url =`https://raw.githubusercontent.com/artafps/artafps/main/configs/Config-Web-${lang}.json`
     axios.get(url).then(res=>{
      setData(res.data)
      if(location.search !== undefined){
        const id = location.search.split('?id=')[1]
        const NBdata =  res && res.data?res.data.Blog.Arr.filter(item => checkWordInText(item.h1 ,decodeURIComponent(id)))[0]:null
        console.log(NBdata,id)
        if(NBdata === null || NBdata === undefined ){
           navigate('/404') 
        }else{
          setBlog(NBdata)
        }
      }else{
         navigate('/404')
      }
     }).catch(err=>console.log(err))
   
  }, [location.search]);
 
 
  return (
    <div className="single single-post">
      <Layout Data = {Data} blog_page={true}>
        <GradientPosition />
        <BlogBg />
        <Breadcrumb title={Blog? Blog.h1:null} />
        <BlogDetailsArea Blog={Blog? Blog:null}/>
      </Layout>
    </div>
  )
}


export default BlogDetailsPage

export const Head = () => {
  const [Blog, setBlog] = useState();
  const [, setData] = useState();
  const location = useLocation(); 
  useEffect( () => {
    const lang ='EN'
    const url =`https://raw.githubusercontent.com/artafps/artafps/main/configs/Config-Web-${lang}.json`
     axios.get(url).then(res=>{
      setData(res.data)
      if(location.search !== undefined){
        const id = location.search.split('?id=')[1]
        const NBdata =  res && res.data?res.data.Blog.Arr.filter(item => checkWordInText(item.h1 ,decodeURIComponent(id)))[0]:null
        console.log(NBdata,id)
        if(NBdata === null || NBdata === undefined ){
           navigate('/404') 
        }else{
          setBlog(NBdata)
        }
      }else{
         navigate('/404')
      }
     }).catch(err=>console.log(err))
   
  }, [location.search]);
  return<Seo title={Blog? Blog.h1:null} />}
