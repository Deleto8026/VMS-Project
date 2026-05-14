import React from "react";
import "../App.css";

function Partnership() {
  return (
    <div className="partnership-page">
      <div className="partnership-container">
        
        <h1 className="partnership-title">Our Partner Organizations</h1>

        <p className="partnership-subtitle">
          Explore organizations that offer volunteer opportunities and
          make a difference in your community.
        </p>

        {/* Search bar */}
        <input
          type="text"
          className="partnership-search"
          placeholder="🔍 Search organizations..."
        />

        {/* Organization 1 */}
        <div className="partner-card">
          <div className="partner-text">
            <h3>River cats</h3>
            <p>
              From Heritage Nights that celebrate diverse cultures to our
              Community Ticket Program, which ensures everyone can experience
              the magic of the game, we're creating opportunities for all.
              Through Cats Care, our volunteer program, players, employees,
              and fans unite to support Sacramento through initiatives like
              school support, nonprofit partnerships, and food drives.
              Additionally, the River Cats Foundation continues our mission
              by aiding children and families in need, living out a key motto:
              "Pitching in to Help Those in Need."
            </p>
          </div>

          <img
            src="/rivercats.png"
            alt="River Cats"
            className="partner-logo"
          />
        </div>

        {/* Organization 2 */}
        <div className="partner-card">
          <div className="partner-text">
            <h3>Smud</h3>
            <p>
              We began serving Sacramento in 1946 and we're now the nation's
              sixth-largest community-owned electric utility, recognized
              nationally and internationally for our innovative energy
              efficiency programs and renewable power technologies.
            </p>
          </div>

          <img
            src="/smud.png"
            alt="SMUD"
            className="partner-logo"
          />
        </div>

        {/* Organization 3 */}
        <div className="partner-card">
          <div className="partner-text">
            <h3>Sac Youth Center</h3>
            <p>
              Co-Founders Adam and Raquel Shipp had worked for many years
              in local public schools providing award winning after school
              programs. They used their experiences being ESL teachers and
              administrators in Kenya to connect with Refugee students on
              High School campuses. They increased their after-school program
              attendance from 2 students to 80 students.
            </p>
          </div>

          <img
            src="/sacyouth.png"
            alt="Sac Youth Center"
            className="partner-logo"
          />
        </div>

      </div>
    </div>
  );
}

export default Partnership;