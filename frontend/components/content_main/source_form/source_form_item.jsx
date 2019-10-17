
import React from "react";
import { Link } from "react-router-dom";
import FollowSourceModalContainer from "./follow_source_modal/follow_source_modal_container";

export default ({ source }) => {
  return (
    <li className="search-match">
      {/* <img src={source.icon_url} /> */}
      <div className="search-body">
        <h1>{source.name}</h1>
        <h2>{source.source_url}</h2>
        <p>{source.description}</p>
        <br />
      </div>
      <FollowSourceModalContainer source={source} />
    </li>
  );
};

