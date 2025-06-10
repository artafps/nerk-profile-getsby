import React, { useEffect } from "react";
// internal
import "../styles/index.scss";
import Header from "./headers/header";
import Footer from "./footers/footer";
import ToggleLightDark from "../components/toggle-light-dark";
import { tg_theme_toggler } from "../utils/utils";
// import Preloader from "../components/preloader";
import usePreloader from "../hooks/use-preloader";
import SectionDivider from "../components/section-divider";

const Layout = ({ lang,Language,getData,Data, children, blog_page = false }) => {
  const isLoading = usePreloader();

  useEffect(() => {
    if (!isLoading) {
      tg_theme_toggler()
    }
  }, [isLoading])

  // if(isLoading){
  //   return <Preloader/>
  // }

  return (
    <React.Fragment>
      {/* {isLoading ? (
        <Preloader />
      ) : ( */}
      <>
        {Data ? Data.Header.Status === "true" ? <Header Data={Data} blog_page={blog_page} /> : null : null}

        <main id={blog_page ? "" : "home"} className="fix">
          {children}
        </main>
        
        {Data ? Data.Footer.Status === "true" ? <SectionDivider />: null : null}
         <Footer lang={lang} Language={Language} getData={getData} Data={Data} /> 
        <ToggleLightDark />
      </>
      {/* )} */}
    </React.Fragment>
  )
}

export default Layout
