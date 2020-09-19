import React from "react";
import { FaRegComment } from "react-icons/fa";
import { GoChevronUp } from "react-icons/go";

function ProductItem(props) {
  return (
    <li className="product-item border border-gray-200 hover:bg-gray-100 cursor-pointer">
      <article className="product-details p-3 sm:p-6 flex items-center  justify-start md:justify-between lg:justify-start">
        <div className="pi-left w-1/6">
          <img
            className="object-cover w-24 h-24"
            src={props.thumbnail.image_url}
            alt={props.name}
          />
        </div>
        <div className="pi-center w-4/6 px-2 lg:px-4 xl:px-0 text-gray-700">
          <h3 className="text-lg font-bold ">{props.name}</h3>
          <p className="tagline text-sm mb-4">{props.tagline}</p>
          <div className="flex text-sm items-center ">
            <div className="comment-count flex items-center justify-between p-1 px-2 border border-gray-400 rounded-md">
              <FaRegComment />
              <span className="ml-1">{props.comments_count}</span>
            </div>
            <p className="topic ml-4 ">
              {props.topics[0] && props.topics[0].name}
            </p>
          </div>
        </div>
        <div className="pi-right w-1/6 flex items-center justify-center">
          <div className="upvotes flex flex-col justify-center items-center w-20 h-20 border-2 border-gray-500 rounded-md">
            <p>
              <GoChevronUp />
            </p>
            <p>{props.votes_count}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductItem;
