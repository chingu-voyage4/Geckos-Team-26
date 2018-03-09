import React from "react";
import "./main.css";

const Main = () => (
  <main className="main">
    <article className="feature-1 card">
      <h2>Feature 1</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius
        laudantium excepturi.
      </p>
    </article>
    <article className="feature-2">
      <h2>Feature 2</h2>
      <p>
        Consectetur adipisicing elit. Rerum eius laudantium excepturi, lorem
        ipsum dolor sit amet.
      </p>
    </article>
    <article className="feature-3">
      <h2>Feature 3</h2>
      <p>
        Rerum eius laudantium excepturi. Lorem ipsum dolor sit amet, consectetur
        adipisicing elit.
      </p>
    </article>
    <article className="feature-4">
      <h2>Feature 4</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum eius
        laudantium excepturi.
      </p>
    </article>
    <article className="feature-5">
      <h2>Feature 5</h2>
      <p>
        Consectetur adipisicing elit. Rerum eius laudantium excepturi, lorem
        ipsum dolor sit amet.
      </p>
    </article>
    <div className="ui inverted masthead segment center aligned custom-background-image">
      <div className="custom-display-header">
        <h1 className="ui inverted header custom-logo-font">MyPet</h1>
        <h2 className="tagline">The easy way to care for your pet.</h2>
        <button className="ui huge black button custom-display-button">
          Get Started
        </button>
      </div>
    </div>
  </main>
);

export default Main;
