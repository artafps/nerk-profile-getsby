import React, { useRef } from 'react';

export function SingleBrand({ img_1, img_2, }) {
  return (
    <div className="brand__item">
      <img
        src={`/assets/img/wallets/${img_1}`}
        className="has-active-light"
        alt="brand"
      />
      <img
        src={`/assets/img/wallets/${img_2}`}
        className="has-active-dark"
        alt="brand"
      />
    </div>
  )
}

const HomeBrands = ({ Data }) => {
  const animate_1 = useRef(null);
  // animate
  // useEffect(() => {
  //   anime({
  //     targets: animate_1.current,
  //     opacity: [0, 1], translateY: [24, 0], delay: 300,
  //     begin: () => {
  //       anime.set(animate_1.current, { opacity: '1' })
  //     },
  //   })
  // }, [])

  return (
    <div
      ref={animate_1}
      className="brand-area section-pb-65"
    // style={{ opacity: "0" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-12">
            <h6 className="brand__title">Skils:</h6>
            <div className="brand__list" style={{display:"flex",flexWrap:"wrap"}}>
              {Data ? Data.Skils.Arr.map(item => {return(
                <div className="brand__item">
                  <img
                    src={item.Icone}
                    style={{minWidth:75 , minHeight:75 ,maxWidth:300 , maxHeight:100 ,borderRadius:10}}
                    alt={item.Text}
                  /></div>
              )}) : null}

             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBrands
