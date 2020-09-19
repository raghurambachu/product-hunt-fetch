import React from "react";

function UpcomingProduct(props) {
  return (
    <li className=" border-b border-gray-400 pt-2 pb-2">
      <article className="upcoming-prod flex justify-between">
        <div className="left-side">
          <h4 className="title font-bold text-md ">{props.item.title}</h4>
          <p className="content text-xs ">{props.item.desc}</p>
          <p className="footer text-xs font-semibold mb-2">
            <span className="inline-block mt-2">+ FOLLOW </span>{" "}
            <span>({props.item.followers})</span>
          </p>
        </div>
        <div className="right-side flex">
          <img
            className="w-12 h-12 object-cover"
            src={props.item.img}
            alt={props.item.title}
          />
        </div>
      </article>
    </li>
  );
}

export default UpcomingProduct;
