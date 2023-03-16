import React from "react";
import Strategy from "../Assets/strategy.png";
import Scheduling from "../Assets/scheduling.png";
import Analyzing from "../Assets/analyze.png";

const Work = () => {
  const workInfoData = [
    {
      image: Strategy,
      title: "Strategy",
      text: "Create a social media strategy tailored to your business goals and target audience.",
    },
    {
      image: Scheduling,
      title: "Scheduling",
      text: "Create and schedule engaging content that resonates with your followers. ",
    },
    {
      image: Analyzing,
      title: "Analyze and Optimization",
      text: "Analyze your results and adjust your strategy to optimize for success.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Maximize your social media impact with our 3-step process: 
        create a winning strategy, post engaging content, and analyze results for continuous improvement
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;