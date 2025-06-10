import React from "react"

const CtaArea = ( {Data}) => {
  return (
    <section className="cta-area">
      <div
        className="cta-bg"
        style={{ backgroundImage: "url(/assets/img/bg/collection_cta.png)" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="cta__content text-center">
              <img
                src="assets/img/objects/circle-01.png"
                width="24"
                alt="Object"
                style={{top:'0%',left:'-16%'}}
              />
              <img
                src="assets/img/objects/x.png"
                width="24"
                alt="Object"
                style={{bottom:'16%',right:'-8%'}}
              />
              <img
                src="assets/img/objects/ethereum-02.png"
                width="40"
                alt="Object"
                style={{top:'0%',right:'-16%'}}
              />
              <img
                src="assets/img/objects/bitcoin-01.png"
                width="48"
                alt="Object"
                style={{bottom:'16%',left:'-8%'}}
              />
              <h2 className="title">{Data?Data.Community.Text:null}</h2>
              <a href={Data?Data.Community.LinkBtn:null} className="btn gradient-btn">
              {Data?Data.Community.BtnText:null}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaArea
