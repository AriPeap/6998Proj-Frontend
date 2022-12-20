import axios from "axios";
import React, { useState } from "react";
import { useLocation } from "react-router";
import ListingItem from "../components/ListingItem";
import Spinner from "../components/Spinner";

export default function Input() {
  const [input, setInput] = useState({
    game1: "",
    game2: "",
    game3: "",
  });
  const [getSuggesstion, setGetSuggesstion] = useState(false);
  const [loading, setLoading] = useState(true);
  const [games, setGames] = useState(null);
  const { game1, game2, game3 } = input;

  const location = useLocation();
  const { platform, genres } = location.state;
  function onChange(e) {
    setInput((prevstate) => ({
      ...prevstate,
      [e.target.id]: e.target.value,
    }));
  }
  async function onClick() {
    const game = Object.values(input);
    const form = {
      similar_games: game,
      platforms: Array.from(platform),
      genres: Array.from(genres),
      rating: 85,
      rating_count: 10,
      // username: user.username,
    };
    const res = await axios({
      method: "post",
      url: "https://sx0t6z5i2c.execute-api.us-east-1.amazonaws.com/prod/games",
      data: form,
    });
    setGames(res.data.games);
    setGetSuggesstion(true);
    setLoading(false);
  }

  return (
    <div
      className={`px-2 py-6 m-8 mb-0 bg-white rounded-md mt-10 ${
        !getSuggesstion ? "lg:h-full md:h-[80%]" : ""
      }`}
    >
      {getSuggesstion === false ? (
        <div className="">
          <h1 className="text-3xl text-center mt-10 mb-20 font-bold">
            Tell me some games you like!
          </h1>
          <div className="flex flex-col  items-center justify-center">
            <form>
              <input
                type="text"
                id="game1"
                className="w-full mb-16  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-500 rounded-lg transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
                onChange={onChange}
                value={game1}
              />
              <input
                type="text"
                id="game2"
                value={game2}
                onChange={onChange}
                className="w-full mb-16  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-500  rounded-lg transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              <input
                type="text"
                id="game3"
                value={game3}
                onChange={onChange}
                className="w-full mb-16  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-500 rounded-lg transition duration-150 ease-in-out focus:text-gray-700 focus:bg-white focus:border-slate-600 text-center"
              />
              <div
                className="flex items-center justify-center"
                to="/suggestions"
                state={{ games: games }}
              >
                <button
                  type="button"
                  onClick={onClick}
                  className=" cursor-pointer mb-6 w-60 ml-3 px-7 py-3 bg-yellow-400 test-black font-medium text-sm uppercase rounded shadow-md hover:bg-yellow-500 focus:shadow-lg active:bg-yellow-600 active:shadow-lg transition ease-in-out duration-150"
                >
                  Get Suggesstions →
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : !loading ? (
        <div className="">
          {console.log("games:", games)}
          <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
            {games.map((game) => (
              <ListingItem
                summary={game.summary}
                rating={game.rating}
                platforms={game.platform}
                cover={game.cover}
                url={game.url}
                name={game.name}
                storyline={game.storyline}
                genres={game.genres}
                id={game.id}
              />
            ))}
          </ul>
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
}
