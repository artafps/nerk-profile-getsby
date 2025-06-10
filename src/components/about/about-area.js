import React from "react";

const AboutArea = ({Data}) => {
  return (
    <section id="about" className="about-area section-pt-70 section-pb-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">{Data?Data.News.Title:null}</h2>
            </div>
          </div>
        </div>
        <div className="about__row-reverse">
          {Data?Data.News.Arr.map((item,i) =>{
            console.log(item ) 
          return  ( <div className="row align-items-center ">
            {i%2 === 0?  <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src={item.ImageURI} alt="img" />
              </div>
            </div>:<div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    {item.TopTitle}
                  </span>
                  <h2 className="title">
                   {item.SubTitle}
                  </h2>
                </div>
                <p>
                {item.Direction}
                </p>
              <br/>
                <div class="about__content-text-btn"><a href={item.LinkBtn}><span>{item.BtnText}</span><i class="unicon-arrow-up-right"></i></a></div>
              </div>
            </div>}
            {i%2 === 1?  <div className="col-lg-6">
              <div
                className="about__img"
                data-anime="opacity:[0, 1]; translateX:[-24, 0]; onview: -250; delay: 200;"
              >
                <img src={item.ImageURI} alt="img" />
              </div>
            </div>:<div className="col-lg-6">
              <div
                className="about__content"
                data-anime="opacity:[0, 1]; translateX:[24, 0]; onview: -250; delay: 300;"
              >
                <div className="section__title text-start">
                  <span className="sub-title tg-text-gradient">
                    {item.TopTitle}
                  </span>
                  <h2 className="title">
                   {item.SubTitle}
                  </h2>
                </div>
                <p>
                {item.Direction}
                </p>
              <br/>
                <div class="about__content-text-btn"><a href={item.LinkBtn}><span>{item.BtnText}</span><i class="unicon-arrow-up-right"></i></a></div>
              </div>
            </div>}
            
          </div>)
          }):null}
        </div>
      </div>
    </section>
  )
}

export default AboutArea
