import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Genres() {
  const [genres, setGenres] = useState(new Set());
  const location = useLocation();
  const { platform } = location.state;

  function onChnage(e) {
    if (e.target.checked) {
      setGenres((genres) => new Set([...genres, +e.target.name]));
    }
  }
  return (
    <div className="px-2 py-6 m-8 h-full md:h-[80%] bg-white rounded-md mt-10">
      <h1 className="text-3xl text-center mt-6 font-bold">
        Tell me your genres!
      </h1>
      <div className="flex flex-col justify-center relative place-items-center my-20">
        <div className="flex flex-row  mb-20">
          <div className="">
            <label className="text-lg mt-6 font-semibold flex">
              <input type="checkbox" name="12" id="rpg" onChange={onChnage} />
              <p className="px-8">RPG</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input
                type="checkbox"
                name="31"
                id="Adventure"
                onChange={onChnage}
              />
              <p className="px-8">Adventure</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input
                type="checkbox"
                name="15"
                id="strategy"
                onChange={onChnage}
              />
              <p className="px-8">Strategy</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input
                type="checkbox"
                name="14"
                id="sports"
                onChange={onChnage}
              />
              <p className="px-8">Sports</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input type="checkbox" name="35" id="card" onChange={onChnage} />
              <p className="px-8">Card & Board Game</p>
            </label>
          </div>
          <div className="ml-10">
            <label className="text-lg mt-6 font-semibold flex">
              <input
                type="checkbox"
                name="5"
                id="shooter"
                onChange={onChnage}
              />
              <p className="px-8">Shooter</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input type="checkbox" name="11" id="RTS" onChange={onChnage} />
              <p className="px-8">Real Time Strategy (RTS)</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input type="checkbox" name="32" id="indie" onChange={onChnage} />
              <p className="px-8">Indie</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input type="checkbox" name="36" id="moba" onChange={onChnage} />
              <p className="px-8">Moba</p>
            </label>
            <label className="text-lg mt-6 font-semibold flex">
              <input
                type="checkbox"
                name="34"
                id="visualnovel"
                onChange={onChnage}
              />
              <p className="px-8">Visual Novel</p>
            </label>
          </div>
        </div>
        <Link
          className="flex items-center justify-center"
          to="/forms/input"
          state={{ platform: platform, genres: genres }}
        >
          <button
            type="button"
            className="mb-6 mt-10 w-60 ml-3 px-7 py-3 bg-yellow-400 test-black font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-500 focus:shadow-lg active:bg-yellow-600 active:shadow-lg transition ease-in-out duration-150"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
}
