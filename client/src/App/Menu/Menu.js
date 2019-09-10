import React from "react";

import homeIcon from "../../assets/home.svg";
import signIcon from "../../assets/sign-in.svg";
import outIcon from "../../assets/sign-out.svg";
import userIcon from "../../assets/user.svg";
import peopleIcon from "../../assets/people.svg";

import "./Menu.css";

export default class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="MenuParent">
        <div id="MenuChild">
          <object data={homeIcon} type="image/svg+xml">
            <img src={homeIcon} alt="Home Icon" />
          </object>
          <br />
          <object data={signIcon} type="image/svg+xml">
            <img src={signIcon} alt="Sign In Icon" />
          </object>
          <br />
          <object data={outIcon} type="image/svg+xml">
            <img src={outIcon} alt="Sign In Icon" />
          </object>
          <br />
          <object data={signIcon} type="image/svg+xml">
            <img src={signIcon} alt="Sign In Icon" />
          </object>
          <br />
          <object data={outIcon} type="image/svg+xml">
            <img src={outIcon} alt="Sign In Icon" />
          </object>
          <br />
          <object data={signIcon} type="image/svg+xml">
            <img src={signIcon} alt="Sign In Icon" />
          </object>
          <br />
          <object data={outIcon} type="image/svg+xml">
            <img src={outIcon} alt="Sign In Icon" />
          </object>
        </div>
      </div>
    );
  }
}
