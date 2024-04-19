import React from "react";

const Loading = () => {
  let arr = Array(10).fill("");
  let loading = arr?.map((el, inx) => (
    <div key={inx} className="card">
      <div className="card__image"></div>
      <div className="category"></div>
      <div className="name"></div>
      <div className="rating"></div>
      <div className="category"></div>
      <div className="buttons">
        <div className="narx"></div>
        <div className="olish"></div>
      </div>
    </div>
  ));
  return (
    <>
      <div className="container">
        <div className="loading">
          <div className="wrapper">{loading}</div>
        </div>
      </div>
    </>
  );
};

export default Loading;
