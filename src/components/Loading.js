import React from "react";
import "../style/Loading.css";

const Loading = () => {
  return (
    <div class="position-absolute w-100 h-100 d-flex flex-column align-items-center justify-content-center">
      <div class="lds-dual-ring"></div>
    </div>
  );
};

export default Loading;
