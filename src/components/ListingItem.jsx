import React from "react";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import StarRatings from "react-star-ratings";

export default function ListingItem({
  summary,
  rating,
  platforms,
  cover,
  url,
  name,
  storyline,
  genres,
  id,
  onDelete,
}) {
  return (
    <li className="m-[10px] relative bg-white flex flex-row justify-between items-center shadow-md hover:shadow-lg rounded-md overflow-hidden transition-shadow duration-150">
      <a className="contents" href={`/games/${id}`} target="_blank">
        <img
          className="h-[170px] w-full object-cover hover:scale-110 transition-scale duration-200 ease-in"
          loading="lazy"
          src={cover}
          alt=""
        />
        <div className="w-full p-[10px]">
          <p className="font-semibold m-0 text-xl truncate">{name}</p>
          <div className="flex items-center space-x-1">
            <p className="font-semibold text-sm mb-[2px] text-gray-600 truncate">
              {summary}
            </p>
          </div>
          <p className="text-[#457b9d] mt-2 font-semibold truncate ">
            {storyline}
          </p>
          <div className="flex items-center mt-[10px] space-x-3">
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">{platforms}</p>
            </div>
            <div className="flex items-center space-x-1">
              <p className="font-bold text-xs">Rating: </p>
              <StarRatings
                className="absolute right-10"
                rating={(+rating / 100) * 5}
                starDimension="15px"
                starSpacing="5px"
                starRatedColor="rgb(250,204,21)"
              />
            </div>
          </div>
        </div>
      </a>
      {onDelete && (
        <FaTrash
          className="absolute bottom-2 right-2 h-[14px] cursor-pointer text-red-500"
          onClick={() => onDelete(id)}
        />
      )}
    </li>
  );
}
