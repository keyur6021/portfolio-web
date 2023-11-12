import React from "react";
import Header from "../headerSection/Header";
import './../../../src/App.scss';
import ProjectSection from "../ProjectSection";


const HomePage = () => {

  return (
    <React.Fragment>
      <div>
        <Header />
        <ProjectSection />

      </div>
    </React.Fragment>
  );
};

export default HomePage;
