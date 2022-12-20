import React from "react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className=" px-2 py-6 m-8 h-full md:h-[80%] bg-white rounded-md mt-10">
      <h1 className="text-3xl text-center mt-10 mb-20 font-semibold">
        Wellcome!
      </h1>
      <p className="text-2xl text-center mt-30 mb-10 font-nomal">
        Don't know what to play? Too many choices?
      </p>
      <p className="text-2xl text-center mt-10 mb-10 font-nomal">
        Let me help you!
      </p>

      <div className="flex items-center justify-center">
        <button
          type="button"
          onClick={() => navigate("/forms/platform")}
          className=" mt-32 mb-6 w-60 ml-3 px-7 py-3 bg-yellow-400 test-black font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-500 focus:shadow-lg active:bg-yellow-600 active:shadow-lg transition ease-in-out duration-150"
        >
          Start
        </button>
      </div>
    </div>
  );
}
