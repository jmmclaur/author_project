//design
//vendor stall on right with 4 rows, 1 for row 1, 2 for row 2, etc
//unpublished works will appear hidden by cloth

//things needed: cards that fit in grid like so
//          1
//      2   2
// 3    3   3

//cover
//popup modal on left of screen for when user clicks on published work
//modal has img carousel of front/back cover on left, text to the right

//background of city

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Published = ({}) => {
  return (
    <>
      <section className="vendor_stall">
        <Link to="/author_project/signpost" className="signpost">
          <button className="signpost_btn">Sign Post</button>
        </Link>
        <div className="published_grid">
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

export default Published;
