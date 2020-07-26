import React, { Fragment } from "react";

export default function Preloader() {
  return (
    <Fragment>
      <div className="preloader">
        <img src="asset/img/loader.gif" alt="preloader" className="img-fluid" />
      </div>
    </Fragment>
  );
}
