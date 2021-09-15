import React from "react";
import { withRouter } from "react-router-dom";
import studioBag from "../../assets/studio.jpg";
import "./main-section.styles.scss";

function MainSection({ history }) {
  return (
    <div className="main-section-container">
      <div className="main-section">
        <div className="ms-m-image">
          <img src={studioBag} alt="studio bag" />
        </div>
        <div className="ms-m-description">
          <h2>Designed for fashion, Created for sport</h2>
          <p>
            We make products that effortlessly transition from day to night,
            From the board room to the fitness studio, and evrywhere in between,
            each Nomads piece is thoightfully created to be the perfect balance
            of form function.
          </p>
          <button
            className="button is-black"
            id="shop-now"
            onClick={() => history.push("/product/1")}
          >
            STUDIO BAG
          </button>
        </div>
      </div>
    </div>
  );
}

export default withRouter(MainSection);
