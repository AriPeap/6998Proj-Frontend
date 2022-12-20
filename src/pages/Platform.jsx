import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Platform() {
  const [platform, setPlatform] = useState(new Set());

  function onChange(e) {
    if (e.target.checked) {
      setPlatform((platform) => new Set([...platform, +e.target.name]));
    }
  }

  return (
    <div className="px-2 py-6 m-8 h-full bg-white rounded-md mt-10">
      <h1 className="text-3xl text-center mt-6 font-bold">
        Tell me your platform!
      </h1>
      <div className="flex flex-col justify-center relative place-items-center mt-20 mb-20">
        <div className="flex flex-col">
          <label className="text-lg mt-6 font-semibold flex">
            <input
              type="checkbox"
              name="48"
              id="playstation"
              onChange={onChange}
            />
            <p className="px-8">PlayStation</p>
          </label>
          <label className="text-lg mt-6 font-semibold flex">
            <input type="checkbox" name="11" id="xbox" onChange={onChange} />
            <p className="px-8">Xbox</p>
          </label>
          <label className="text-lg mt-6 font-semibold flex">
            <input
              type="checkbox"
              name="130"
              id="nintendo"
              onChange={onChange}
            />
            <p className="px-8">Nintendo</p>
          </label>
          <label className="text-lg mt-6 font-semibold flex">
            <input type="checkbox" name="6" id="pc" onChange={onChange} />
            <p className="px-8">PC (Windows)</p>
          </label>
        </div>
      </div>

      <Link
        to="/forms/genres"
        state={{ platform: platform }}
        className="flex items-center justify-center"
      >
        <button
          type="button"
          className="mb-6 mt-10 w-60 ml-3 px-7 py-3 bg-yellow-400 test-black font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-500 focus:shadow-lg active:bg-yellow-600 active:shadow-lg transition ease-in-out duration-150"
        >
          Next
        </button>
      </Link>
    </div>
  );
}
