import React from "react";
function Location(props) {
  return (
    <div className="location-container">
      <label className="location-tag-input-label" htmlFor="location-tag-input">
        Neighborhoods and Boroughs
      </label>
      <input type="text" value={"hello"} className="location-tag-input" id="" />
    </div>
  );
}

export default Location;
