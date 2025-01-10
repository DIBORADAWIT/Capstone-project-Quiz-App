import React from "react";

function Subjects() {
  return (
    <div className="subs">
      <div>
        <p className="p">Choose Your Subject Item</p>
      </div>
      <div>
        <button className="englishbutton">English</button>
      </div>
      <div>
        <button className="mathbutton">Math</button>
      </div>
      <div></div>
      <div>
        <button className="generalbutton">General Knowledge</button>
      </div>
      <div>
        <button className="geobutton">Geography</button>
      </div>
      <div>
        <button className="biobutton">Biology</button>
      </div>
      <a href="/custom" className="button">
        custom
      </a>
    </div>
  );
}

export default Subjects;
