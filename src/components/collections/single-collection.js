import React from "react"

const SingleCollection = ({item}) => {
  return (
    <div className="collection__item">
      <div className="collection__item-thumb">
        <a href={`/blog/?id=${item.h1}`}>
          <img src={item.ImageURI} alt="img" />
        </a>
      </div>
      <div className="collection__item-content">
        <h4 className="name">
          <a href={`/blog/?id=${item.h1}`}>#{item.h1}</a>
        </h4>
        
      </div>
    </div>
  )
}

export default SingleCollection
