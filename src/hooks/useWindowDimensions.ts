import React, { useEffect, useState } from "react";
import ReactDom from "react-dom";

const getWindowDimensions = () => {
  const { innerHeight: height, innerWidth: width } = window;
  return {
    width,
    height,
  };
};

export const useWindowDimension = () => {
  const [windowDimension, setWindowDimension] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return windowDimension;
};
