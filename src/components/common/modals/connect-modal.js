import React from "react";

const ConnectModal = ({ Data }) => {
  return (
    <div className="connect__modal">
      <div
        className="modal fade"
        id="connectModal"
        tabIndex="-1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal__wrapper">
              <div className="modal__header">
                <h2 className="title">{Data ? Data.Donate.Title : ''}</h2>
                <button data-bs-dismiss="modal" aria-label="Close">
                  <i className="flaticon-close-1"></i>
                </button>
              </div>
              <div className="modal__body text-center">
                <p>
                  {Data ? Data.Donate.SubTitle : ''}
                </p>
                <div className="connect__section">
                  <ul className="list-wrap">

                    {Data ? Data.Donate.Items.map(item => {
                      console.log(item)
                      return (
                        <li>
                          <a href={"https://" + item.Link} className="connect-meta">
                            <img
                              src={item.Icone}
                              alt="Metamask"
                            />
                            {item.Text}
                          </a>
                        </li>
                      )
                    }) : ''}


                  </ul>
                </div>
                {Data ? Data.Footer.PowerBy.Status === "true" ?
                  <p className="privacy-text">
                    <a href={Data ? Data.Footer.PowerBy.Link : null}>{Data ? Data.Footer.PowerBy.Text : null}</a>
                  </p> : null: null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConnectModal
