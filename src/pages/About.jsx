import React from "react";
import "../App.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1 className="about-title">About Us</h1>

        <section className="about-section">
          <div className="about-text">
            <h3>A Quick Intro</h3>
            <p>
              We’re a team of passionate individuals — former nonprofit workers,
              technologists, and volunteers ourselves — who saw firsthand how
              outdated systems and scattered spreadsheets were slowing down the
              very organizations trying to do the most good. So we built
              something better.
            </p>
          </div>

          <img
            src="/about-intro.png"
            alt="Volunteers raising hands"
            className="about-image"
          />
        </section>

        <section className="about-section">
          <div className="about-text">
            <h3>Who We Are</h3>
            <p>
              We’re a team of passionate individuals — former nonprofit workers,
              technologists, and volunteers ourselves — who saw firsthand how
              outdated systems and scattered spreadsheets were slowing down the
              very organizations trying to do the most good. So we built
              something better.
            </p>
          </div>

          <img
            src="/about-team.png"
            alt="Volunteer team"
            className="about-image bordered"
          />
        </section>

        <section className="about-section">
          <div className="about-text">
            <h3>Join The Movement</h3>
            <p>
              Thousands of organizations trust [Organization Name] to power
              their volunteer programs. Whether you’re a small community group
              or a large national nonprofit, we’d love to help you do more with
              the people who make it all possible.
            </p>
          </div>

          <img
            src="/about-movement.png"
            alt="Volunteers helping children"
            className="about-image"
          />
        </section>
      </div>
    </div>
  );
}

export default About;