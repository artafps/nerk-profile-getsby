import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { window } from "browser-monads";
import { Link as SinglePageLink } from "react-scroll";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { useLocation } from "@reach/router";
// internal
import OffCanvas from "../../components/common/off-canvas";
import ConnectModal from "../../components/common/modals/connect-modal";
import useSticky from "../../hooks/use-sticky";
import { menu_data } from "../../data/menu_data";


const Header = ({ Data, blog_page }) => {
  const { sticky } = useSticky()
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  let { pathname } = useLocation();

  let parentClass = ""
  if (pathname.startsWith("/blog") || pathname.startsWith("/blog-details")) {
    parentClass = "active"
  }


  useEffect(() => {
    if (isSidebarOpen) {
      window.document.body.classList.add("mobile-menu-visible")
    } else {
      window.document.body.classList.remove("mobile-menu-visible")
    }
  }, [isSidebarOpen])

  // handleClick
  const handleClick = () => {
    setIsSidebarOpen(true)
  }
  const Theme = localStorage.getItem('tg_theme_scheme') ? (localStorage.getItem('tg_theme_scheme') === "dark" ? true : false) : false
  return (
    <header>
      <div
        id="sticky-header"
        className={`tg-header__area transparent-header ${sticky ? "sticky-menu" : ""
          }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div onClick={handleClick} className="mobile-nav-toggler">
                <i className="flaticon-menu-1"></i>
              </div>
              <div className="tgmenu__wrap">
                <nav className="tgmenu__nav">
                  <div className="logo">
                    <Link to="/" className="light-logo">
                      {Data ? <img style={{ maxWidth: 300 }} src={Data.Header.Logo.ImageURI} alt={Data.Header.Logo.Title} /> : null}
                    </Link>
                    <Link to="/" className="dark-logo">
                      {Data ? <img style={{ maxWidth: 300 }} src={Data.Header.Logo.ImageURI} alt={Data.Header.Logo.Title} /> : null}
                    </Link>
                  </div>
                  <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-lg-flex">
                    <ul className="navigation">
                      {menu_data.map((menu, i) => (
                        <React.Fragment key={i}>
                          {menu.hasDropdown ? (
                            <li className={`menu-item-has-children`}>
                              {menu.title !== "Blog" && (
                                <SinglePageLink
                                  activeClass="active"
                                  to={menu.link}
                                  spy={true}
                                  smooth={true}
                                  offset={-70}
                                  duration={500}
                                  className="section-link"
                                >
                                  {menu.title}
                                </SinglePageLink>
                              )}
                              {menu.title === "Blog" && (
                                <Link
                                  className={`${parentClass}`}
                                  to={menu.link}
                                >
                                  {menu.title}
                                </Link>
                              )}
                              <ul className="sub-menu">
                                {menu.submenus.map((sub, i) => (
                                  <li
                                    key={i}
                                    className={`${pathname === `${sub.link}`
                                      ? "active"
                                      : ""
                                      }`}
                                  >
                                    <Link to={sub.link}>{sub.title}</Link>
                                  </li>
                                ))}
                              </ul>
                            </li>
                          ) : blog_page ? (
                            <li>
                              <AnchorLink to={`/#${menu.link}`} title={menu.title} />
                              {/* <Link to={`/#${menu.link}`}>
                                {menu.title}
                              </Link> */}
                            </li>
                          ) : (
                            <li>
                              <SinglePageLink
                                activeClass="active"
                                to={menu.link}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="section-link"
                              >
                                {menu.title}
                              </SinglePageLink>
                            </li>
                          )}
                        </React.Fragment>
                      ))}
                    </ul>
                  </div>
                  <div className="tgmenu__action">
                    <ul className="list-wrap">
                      <li className="header-social">
                        {Data && Data.Header ? Data.Header.Social.map(item => {
                          if (item.Icone === '') {
                            if (Theme === item.Dark) {
                              return (<a href={item.Link} className="d-none d-sm-block">
                                <i className={`fab fa-${item.Link.split('.')[0].split('https://')[1]}`}></i>
                              </a>)
                            }
                          } else {
                            if (Theme === item.Dark) {
                              return (<a href={item.Link} className="d-none d-sm-block">
                                <img src={item.Icone} />
                              </a>)
                            }
                          }
                        }

                        ) : null}
                        {Data ? Data.Donate.Status === 'true' ?
                          <a
                            href="#"
                            className="d-blcok d-xl-none"
                            data-bs-toggle="modal"
                            data-bs-target="#connectModal"
                          >
                            <i className="fas fa-wallet"></i>
                          </a> : null : null}

                      </li>
                      {Data ? Data.Donate.Status === 'true' ?
                        <li className="header-btn">
                          <button
                            className="btn border-btn"
                            data-bs-toggle="modal"
                            data-bs-target="#connectModal"
                          >
                            Donate Meee ...
                          </button>
                        </li> : null : null}
                    </ul>
                  </div>
                </nav>
              </div>

              {/* <!-- Mobile Menu  --> */}
              <OffCanvas Data={Data} setIsSidebarOpen={setIsSidebarOpen} data_1={true} />
              {/* <!-- End Mobile Menu --> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Connect Wallet Modal --> */}
      <ConnectModal Data={Data} />
      {/* <!-- Connect Wallet Modal --> */}
    </header>
  )
}

export default Header
