"use state";

import React from "react";
import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    const loader = document.querySelector(".loader");
    if (loader) {
      loader.classList.add("loader--hidden");

      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
      });
    }
  }, []);

  return (
    <div className="loader w-full h-screen overscroll-none flex flex-col text-[25px] font-semibold text-white disabled">
      <p className="mb-5">Loading</p>
    </div>
  );
};

export default Loader;
