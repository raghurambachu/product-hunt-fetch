import React from "react";

function Company(props) {
  return (
    <li className="mb-3">
      <article className="company flex">
        <div className="left-side text-sm">
          <h4 className="company-title font-bold text-md">{props.item.name}</h4>
          <p className="role">{props.item.role}</p>
          <p className="location">{props.item.location}</p>
        </div>
        <div className="right-side"></div>
      </article>
    </li>
  );
}

export default Company;
