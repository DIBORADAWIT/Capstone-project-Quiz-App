import React from "react";

function Home() {
  return (
    <div className="firsthome">
      <div>
        <button className="signupbutton">sign up</button>
      </div>
      <div>
        <button className="loginbutton">log in</button>
      </div>
      <div>
        <button className="googlebutton">Continue with Google</button>
      </div>

      <a href="/infos" className="button">
        next
      </a>
    </div>
  );
}

export default Home;
