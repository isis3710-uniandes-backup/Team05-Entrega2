import React from "react";

import "./Content.css";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ContentWrapper">
        <div id="MainContainer">
          <div className="uk-flex uk-flex-between" id="ContentHeader">
            <div>
              <h1 className="ContentTitle">My Dashboard</h1>
            </div>

            <div className="uk-flex uk-flex-middle">
              <div>
                <p>User Name</p>
              </div>
              <div>
                <img
                  id="ProfileImage"
                  src="https://picsum.photos/60"
                  alt="Profile"
                  height="60"
                />
              </div>
            </div>
          </div>

          <div
            id="ContentDetail"
            class="uk-child-width-1-3@s uk-grid-match"
            data-uk-grid
          >
            <div>
              <div class="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div>
              <div class="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div>
              <div class="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div>
              <div class="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>

            <div>
              <div class="DetailCard uk-card uk-card-default uk-card-hover uk-card-body">
                <h3 class="uk-card-title">Default</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
