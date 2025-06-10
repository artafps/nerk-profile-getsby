import React, { useEffect, useState }  from 'react';
import { Seo } from "../components/seo"
import HomeBrands from "../components/brands/home-brands"
import HeroArea from "../components/hero-banner/hero-area"
import Layout from "../layout/layout";
import MintArea from "../components/mint-area/mint-area"
import SectionDivider from "../components/section-divider"
import AboutArea from "../components/about/about-area"
import CollectionArea from "../components/collections/collection-area"
import RoadMapArea from '../components/roadmap-area/roadmap-area';
import TeamArea from '../components/teams/team-area';
import CtaArea from '../components/cta/cta-area';
import GradientPosition from '../components/gradient-position';
import axios from 'axios';

const HomePage = () => {
  const [Data, setData] = useState();
  const [Language, setLanguage] = useState();
  const [Lang, setLang] = useState();

  const getData =()=>{
    const lang =localStorage.getItem('Lang')?localStorage.getItem('Lang'):'EN'
    const url =`https://raw.githubusercontent.com/artafps/artafps/main/configs/Config-Web-${lang}.json`
    const LangLink =`https://raw.githubusercontent.com/artafps/artafps/main/configs/Language.json`
    setLang(lang)
    axios.get(url).then(res=>{
    setData(res.data)
   }).catch(err=>console.log(err))
   axios.get(LangLink).then(res=>{
    setLanguage(res.data)
   }).catch(err=>console.log(err))
  }
  useEffect( () => {
    getData()
  }, []);
  return (
    <Layout lang={Lang} Data={Data} Language={Language} getData={getData}>
      <GradientPosition/>
      {Data ? Data.Slider.Status === "true"?<HeroArea Data={Data} />:null :null}
      {Data ? Data.Skils.Status === "true"?<HomeBrands Data={Data} />:null :null}
      
      {Data ? Data.Project.Status === "true"?<SectionDivider />:null :null}
      {Data ? Data.Project.Status === "true"?<MintArea Data={Data} />:null :null}
    
      {Data ? Data.News.Status === "true"?<SectionDivider />:null :null}
      {Data ? Data.News.Status === "true"?<AboutArea Data={Data} />:null :null}
      {Data ? Data.Blog.Status === "true"?<SectionDivider />:null :null}
      {Data ? Data.Blog.Status === "true"?<CollectionArea Data={Data} />:null :null}
      {Data ? Data.Plan.Status === "true"?<SectionDivider />:null :null}
      {Data ? Data.Plan.Status === "true"?<RoadMapArea Data={Data} />:null :null}
      {Data ? Data.Team.Status === "true"?<SectionDivider />:null :null}
      {Data ? Data.Team.Status === "true"?<TeamArea Data={Data} />:null :null}
      {Data ? Data.Community.Status === "true"?<SectionDivider />:null :null}
      {Data ? Data.Community.Status === "true"?<CtaArea Data={Data} />:null :null}
    </Layout>
  )
}
export default HomePage;

export const Head = () => <Seo title={"ARTA FPS (ARTA FallahPoor)"} />
