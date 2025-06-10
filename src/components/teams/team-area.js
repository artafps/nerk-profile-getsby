import React from "react";
import team_data from "../../data/team-data";
import SingleTeam from "./single-team";

const TeamArea = ({Data}) => {
  return (
    <section className="team-area section-py-80">
      <div className="container">
        <div
          className="row justify-content-center"
          data-anime="opacity:[0, 1]; translateY:[24, 0]; onview: true; delay: 100;"
        >
          <div className="col-xl-8 col-lg-10">
            <div className="section__title text-center title-mb-75">
              <h2 className="title">{Data ? Data.Team.Title :null}</h2>
            </div>
          </div>
        </div>
        <div
          className="team__grid-wrapper"
          data-anime="targets: > *; opacity:[0, 1]; translateY:[24, 0]; onview: -400; delay: anime.stagger(100);"
        >
          {Data?Data.Team.Arr.map((item,i) => {
            return(
            <SingleTeam key={i} item={item} />
          )}):null}
        </div>
      </div>
    </section>
  )
}

export default TeamArea
