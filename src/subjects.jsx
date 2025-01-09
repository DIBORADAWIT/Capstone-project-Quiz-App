import React from "react";

function subjects() {
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
      <div>
        <button className="iqbutton">IQ Test</button>
      </div>
      <div>
        <button className="generalbutton">General Knowledge</button>
      </div>
      <div>
        <button className="geobutton">Geography</button>
      </div>
      <div>
        <button className="biobutton">Biology</button>
      </div>
    </div>
  );
}

export default subjects;
