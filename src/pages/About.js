import React, { Component } from "react";
import "./About.css";
import profile_pic_diego from "../assets/profile_pic_diego.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={profile_pic_diego}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Diego Lopez</div>
              <div className="brief_description">
                <p>
                  My name is Diego (he/him/his), and I study Computer Science at
                  UNC Charlotte. I’m Bolivian-Ecuadorian and grew up in these
                  states: AZ, CA, & NJ. When I am not working on a project, I
                  enjoy walking, traveling, collegiate competitions, and Salmon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
