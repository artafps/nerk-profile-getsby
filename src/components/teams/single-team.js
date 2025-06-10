import React from "react"

const SingleTeam = ({ item, style_2 = false }) => {
  console.log(item)
  return (
    <div className={`${style_2 ? "team__item-two" : "team__item"} text-center`}>
      <div className={`${style_2 ? "team__item-two-thumb" : "team__item-thumb"}`}>
        <img src={item.ImageURI} alt="team" />
      </div>
      <div className={`${style_2 ? "team__item-two-content" : "team__item-content"}`}>
        <h4 className="name">{item.Name}</h4>
        <ul className="team__social-list list-wrap">
          {item.Disc !==  "" ? <li>
            <a href={ item.Disc } target="_blank">
              <i className={"fab fa-discord"}></i>
            </a>
          </li> : null}
          {item.Drib !==  "" ? <li>
            <a href={item.Drib} target="_blank">
              <i className={"fab fa-dribbble"}></i>
            </a>
          </li> : null}
          {item.Github !==  "" ? <li>
            <a href={item.Github} target="_blank">
              <i className={"fab fa-github"}></i>
            </a>
          </li> : null}
          {item.Gitlab  !==  "" ? <li>
            <a href={item.Gitlab} target="_blank">
              <i className={"fab fa-gitlab"}></i>
            </a>
          </li> : null}
          {item.Ins !==  ""? <li>
            <a href={item.Ins} target="_blank">
              <i className={"fab fa-instagram"}></i>
            </a>
          </li> : null}
          {item.Lid !==  "" ? <li>
            <a href={item.Lid} target="_blank">
              <i className={"fab fa-linkedin"}></i>
            </a>
          </li> : null}
          {item.Tel  !==  ""? <li>
            <a href={item.Tel} target="_blank">
              <i className={"fab fa-telegram"}></i>
            </a>
          </li> : null}
          {item.Twit  !==  ""? <li>
            <a href={item.Twit} target="_blank">
              <i className={"fab fa-twitter"}></i>
            </a>
          </li> : null}


        </ul>
      </div>
    </div>
  )
}

export default SingleTeam
