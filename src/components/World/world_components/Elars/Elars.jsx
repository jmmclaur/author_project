//this should show pictures of everyone's E'lars, name, close button/esc key, add button

import "./Elars.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Elars = ({}) => {
  return (
    <>
      <section className="elar_list">
        <Link to="/world" className="world">
          <button className="world_btn">World Building</button>
        </Link>
        <button className="elars_btn">Add+</button>
        <div className="elar_grid">
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
      <section className="elar_modal"></section>
    </>
  );
};

export default Elars;
