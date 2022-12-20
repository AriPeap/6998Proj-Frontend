import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import ListingItem from "../components/ListingItem";
import Spinner from "../components/Spinner";
import UserPool from "../UserPool";

export default function Profile() {
  const user = UserPool.getCurrentUser();
  const [wishList, setWishList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getWishList() {
      const res = await axios({
        method: "get",
        url: `https://sx0t6z5i2c.execute-api.us-east-1.amazonaws.com/prod/history/${user.username}`,
      });
      setWishList(res.data.games);
      setLoading(false);
    }
    getWishList();
  }, [user.username]);

  async function onDelete(id) {
    if (window.confirm("Are you sure you want to delete?")) {
      await axios({
        method: "delete",
        url: `https://sx0t6z5i2c.execute-api.us-east-1.amazonaws.com/prod/history/${user.username}`,
        data: {
          game_id: +id,
        },
      }).catch((err) => {
        console.log(err);
      });
    }
    window.location.reload(false);
  }

  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="px-2 py-6 m-8 h-full bg-white rounded-md mt-10">
      <h1 className="text-3xl text-center mt-10 mb-10 font-bold">
        Here is your wishlist!
      </h1>
      <div className="">
        {console.log("games:", wishList)}
        <ul className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2">
          {wishList.map((game) => (
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
              onDelete={() => onDelete(game.id)}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}
