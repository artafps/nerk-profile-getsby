import React from "react";
import anime from 'animejs/lib/anime.es.js';

function SingleMintItem({ Link, Percent, ImageURI, title, subtitle }) {
  return (
    <div className="col-md-6 col-sm-9">
      <div className="mint__item">
        <div className="mint__icon">
          <img style={{ borderRadius: 20 }} src={ImageURI} alt="icon" />
          <br />
          <br />
        </div>
        <div className="mint__content">
          <h3 className="title">{title}</h3>
          <p className="desc">{subtitle}</p>
          <br />
      
          <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
  <div className="progress-bar progress-bar-striped progress-bar-animated" style={{width: `${Percent}%`}} />
</div>

          <br />

          <div class="about__content-text-btn"><a href={Link}><span>Learn more</span><i class="unicon-arrow-up-right"></i></a></div>
        </div>
      </div>
    </div>
  )
}

const MintArea = ({ Data }) => {
  const animate_3 = React.useRef(null);
  React.useEffect(() => {
    animate_3.current = anime({
      targets: ".el",
      opacity: [0, 1], translateY: [24, 0],
      delay: anime.stagger(100),
      loop: false,
      // direction: "alternate",
      // easing: "easeInOutSine"
    });
  }, []);
  // const animate_1 = useRef(null);
  // const animate_2 = useRef(null);
  // const animate_3 = useRef(null);
  // // animate
  // useEffect(() => {
  //   anime({
  //     targets: animate_1.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 200,
  //     begin: () => {
  //       anime.set(animate_1.current, { opacity: '1' })
  //     },
  //   })
  //   anime({
  //     targets: animate_2.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 300,
  //     begin: () => {
  //       anime.set(animate_2.current, { opacity: '1' })
  //     },
  //   })
  //   anime({
  //     targets: animate_3.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: anime.stagger(100),
  //     begin: () => {
  //       anime.set(animate_3.current, { opacity: '1' })
  //     },
  //   })
  // }, [])
  return (
    <section id="minting" className="mint-area section-pt-80 section-pb-50">
      <div className="container">
        <div
          className="row justify-content-center"
          // ref={animate_1}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 200;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-80">
              <h2 className="title">{Data ? Data.Project.Title : null}</h2>
            </div>
          </div>
        </div>
        <div
          className="mint__lits-wrapper"
          // ref={animate_2}
          // style={{ opacity: "0" }}
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 300;"
        >
          <img
            className="shape"
            width="16"
            src="/assets/img/objects/circle-01.png"
            alt="shape"
            style={{ top: "-16%", left: "8%" }}
          />

          <img
            className="shape"
            width="24"
            src="/assets/img/objects/circle-02.png"
            alt="shape"
            style={{ bottom: "16%", right: "-8%" }}
          />

          <img
            className="shape"
            width="28"
            src="/assets/img/objects/x.png"
            alt="Object"
            style={{ bottom: "16%", left: "-8%" }}
          />

          <div
            className="row justify-content-center el"
            ref={animate_3}
            // style={{ opacity: "0" }}
            data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -250; delay: anime.stagger(100);"
          >

            {
              Data ? Data.Project.Arr.map(item => <SingleMintItem
                ImageURI={item.ImageURI}
                Link={item.Link}
                title={item.Title}
                subtitle={item.Description}
                Percent={item.Percent}
              />) : null
            }


          </div>
        </div>
      </div>
    </section>
  )
}

export default MintArea
