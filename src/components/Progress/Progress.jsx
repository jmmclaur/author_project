import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Progress = ({}) => {
  return (
    <>
      <section className="vendor_stall">
        <Link to="/signpost" className="signpost">
          <button className="signpost_btn">Sign Post</button>
        </Link>
        <button className="progress_btn">Add+</button>
        <h2>In Progress</h2>
        <div className="progress_grid">
          <div className="card_1 card_grid">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Book 1</h5>
              <p className="card-text">Book 1</p>
            </div>
          </div>
          <div className="card_2 card_grid">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Book 2</h5>
              <p className="card-text">Book 2</p>
            </div>
          </div>
          <div className="card_3 card_grid">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Book 3</h5>
              <p className="card-text">Book 3</p>
            </div>
          </div>
          <div className="card_4 card_grid">
            <img className="card-img-top" src="..." alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Book 4</h5>
              <p className="card-text">Book 4</p>
            </div>
          </div>
        </div>
      </section>
      <section className="published_modal"></section>
    </>
  );
};

export default Progress;
