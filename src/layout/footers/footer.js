import { Link } from "gatsby";
import React from "react";
import { animateScroll as scroll } from 'react-scroll';

// handle scroll to top
const handleScrollToTop = () => {
  scroll.scrollToTop();
}

const Footer = ({ lang, Language,getData,Data }) => {
  const Theme =typeof localStorage !== 'undefined'? localStorage.getItem('tg_theme_scheme') ? (localStorage.getItem('tg_theme_scheme') === "dark" ? true : false) : false  : false 
  return (
    <footer className="footer-area section-py-80">
      <div className="container">
        <div className="footer__wrapper">
          <img
            src="/assets/img/objects/ethereum-01.png"
            width="32"
            alt="object"
            style={{ top: '32%', left: '16%' }}
          />
          <img
            src="/assets/img/objects/x.png"
            width="16"
            alt="object"
            style={{ top: '8%', right: '16%' }}
          />
          <img
            src="/assets/img/objects/circle-01.png"
            width="16"
            alt="object"
            style={{ bottom: '24%', right: '40%' }}
          />
          <img
            src="/assets/img/objects/circle-03.png"
            width="24"
            alt="object"
            style={{ bottom: '-8%', left: '30%' }}
          />
          <div   className="row justify-content-center">
            <div style={{width:"auto"}} className="col-xl-5 col-lg-7 col-md-9 col-sm-11">
              <div className="footer__info text-center">
                <div className="footer-logo">
                  <Link to="/">
                    <img
                      src={Data ? Data.Footer.Logo.ImageURI : null}
                      width="200"
                      alt={Data ? Data.Footer.Logo.Title : 'object'}
                    />
                  </Link>
                </div>
                <p >
                  {Data ? Data.Footer.Logo.Text : null}
                </p>
                <ul className="list-wrap footer__social">
                  {Data && Data.Footer ? Data.Footer.Social.map((item,i) => {
                    if (item.Icone === '') {
                      if (Theme === item.Dark) {
                        return (<a key={i} href={item.Link} className=" d-sm-block">
                          <i className={`fab fa-${item.Link.split('.')[0].split('https://')[1]}`}></i>
                        </a>)
                      }else{
                        return null
                      }
                    } else {
                      if (Theme === item.Dark) {
                        return (<a href={item.Link} className="d-sm-block">
                          <img alt="object" src={item.Icone} />
                        </a>)
                      }else{
                        return null
                      }
                    }
                  }

                  ) : null}
                </ul>
              </div>
            </div>
          </div>
          <div className="copyright__wrapper">
            <div className="row">
              <div className="col-md-6">
                <div className="copyright__text">
                  <p>&copy; {new Date().getFullYear()} ARTA FPS (Arta Fallahpoor). All rights reserved.</p>
                </div>
              </div>
              <div className="col-md-3"><div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                 {lang}
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  {Language?Language.Language.map(item=><li><button  className="dropdown-item" onClick={() =>{
                    localStorage.setItem('Lang',item)
                    getData()
                  }}>{item}</button></li>):null}
                </ul>
              </div>
              </div>
              <div className="col-md-3">


                <div className="copyright__menu">

                  <ul className="list-wrap">

                    <li className="backTop">
                      <button
                        onClick={handleScrollToTop}
                        style={{ background: "transparent", border: "none" }}
                        className="scroll-to-target"
                        data-target="html"
                      >
                        <i className="flaticon-arrowhead-up"></i>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
