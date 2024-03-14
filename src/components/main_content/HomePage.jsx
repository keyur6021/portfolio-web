import React, { useRef } from "react";
import Header from "../headerSection/Header";
import './../../../src/App.scss';
import ProjectSection from "../ProjectSection";


const HomePage = () => {
  const ref = useRef()
  return (
    <React.Fragment>
      <div>
        <Header projectRef={ref} />
        <ProjectSection projectRef={ref} />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
