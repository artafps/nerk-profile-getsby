import { Link } from "gatsby";
import React, { useState, useEffect } from "react";
// internal
import MobileMenus from "./mobile-menus";
import { menu_data, menu_data_2, menu_data_3 } from "../../../data/menu_data";

const OffCanvas = ({ Data, setIsSidebarOpen, data_1 = false, data_2 = false, data_3 = false }) => {
  const [menuItems, setMenuItems] = useState([]);
  // decide to render
  useEffect(() => {
    if (data_1) {
      setMenuItems(menu_data)
    }
    if (data_2) {
      setMenuItems(menu_data_2)
    }
    if (data_3) {
      setMenuItems(menu_data_3)
    }
  }, [])
  const Theme = localStorage.getItem('tg_theme_scheme') ? (localStorage.getItem('tg_theme_scheme') === "dark" ? true : false) : false
  return (
    <>
      <div className="tgmobile__menu">
        <nav className="tgmobile__menu-box">
          <div className="close-btn" onClick={() => setIsSidebarOpen(false)}>
            <i className="flaticon-close-1"></i>
          </div>
          <div className="nav-logo">
            <Link to="/" className="light-logo">
              {Data ? <img style={{ maxWidth: 300 }} src={Data.Header.Logo.ImageURI} alt={Data.Header.Logo.Title} /> : null}
            </Link>
            <Link to="/" className="dark-logo">
              {Data ? <img style={{ maxWidth: 300 }} src={Data.Header.Logo.ImageURI} alt={Data.Header.Logo.Title} /> : null}
            </Link>
          </div>
          <div className="tgmobile__menu-outer">
            {/* <!--Here Menu Will Come Automatically Via Javascript / Same Menu as in Header--> */}
            <MobileMenus menuItems={menuItems} setIsSidebarOpen={setIsSidebarOpen} />
          </div>
          <div className="social-links">
            <ul className="list-wrap">
              {Data && Data.Header ? Data.Header.Social.map(item => {

                if (item.Icone === '') {
                  if (Theme === item.Dark) {
                    return (<li><a href={item.Link} className=" d-sm-block">

                      <i className={`fab fa-${item.Link.split('.')[0].split('https://')[1]}`}></i>
                    </a></li>)
                  }
                } else {
                  if (Theme === item.Dark) {
                    return (<li><a href={item.Link} className=" d-sm-block">

                      <img src={item.Icone} />
                    </a></li>)
                  }
                }

              }

              ) : null}

            </ul>
          </div>
        </nav>
      </div>
      <div onClick={() => setIsSidebarOpen(false)} className="tgmobile__menu-backdrop"></div>
    </>
  )
}

export default OffCanvas
