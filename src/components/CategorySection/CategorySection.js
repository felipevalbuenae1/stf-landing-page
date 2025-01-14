import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const CategorySection = () => {
  return (
    <>
        <div class="row text-center my-3 justify-content-center">
            <div class="col-12 col-md-6 col-xl-2 my-2"><a class="btn btn-error-404" href="/jeans?O=OrderByReleaseDateDESC">JEANS</a></div>
            <div class="col-12 col-md-6 col-xl-2 my-2"><a class="btn btn-error-404" href="/zapatos?O=OrderByReleaseDateDESC">ZAPATOS</a></div>
            <div class="col-12 col-md-6 col-xl-2 my-2"><a class="btn btn-error-404" href="/ropa/vestidos?O=OrderByReleaseDateDESC">VESTIDOS</a></div>
            <div class="col-12 col-md-6 col-xl-2 my-2"><a class="btn btn-error-404" href="/accesorios?O=OrderByReleaseDateDESC">ACCESORIOS</a></div>
        </div>
    </>
  );
};

export default CategorySection;
