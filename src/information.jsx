import React from "react";

function nformation() {
  return (
    <div className="infopage">
      <div>
        <button className="emailbutton"></button>
      </div>
      <div className="email">Email Address</div>
      <div>
        <a href="/subs" className="passwordbutton">
          password
        </a>
      </div>
      <div className="password">Password</div>
    </div>
  );
}
export default nformation;
