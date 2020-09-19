import React from "react";

function Card(props) {
  let Component = props.childComponent;

  return (
    <div
      className={props.className + " card mb-8 w-full px-4 md:px-0 sm:w-5/6 "}
    >
      <h2 className="card-title text-lg font-bold mb-4">{props.header}</h2>
      <div className="list flex flex-col p-5 rounded-md bg-white">
        <ul>
          {props.list.map((item, index) => (
            <Component key={index} item={item} />
          ))}
        </ul>
        <button className="btn-view border border-gray-400 py-1 hover:border-red-400 mt-4 text-red-500 font-bold uppercase tracking-tight text-sm ">
          View All
        </button>
      </div>
    </div>
  );
}

export default Card;
