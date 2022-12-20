import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import StarRatings from "react-star-ratings";
import Spinner from "../components/Spinner";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectFade,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css";
import { BsFillBookmarkStarFill } from "react-icons/bs";
import UserPool from "../UserPool";

export default function Game() {
  const [gameData, setGameData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const user = UserPool.getCurrentUser();
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  function getInfo(arr, json) {
    let data = require(`../assets/${json}.json`);
    let res = [];
    arr.forEach((ar) => {
      let find = data.find((d) => d.id === +ar);
      console.log("find:", find);
      find ? res.push(find.name) : console.log("Find nothing");
    });
    return res;
  }
  useEffect(() => {
    async function getGameData() {
      const res = await axios({
        method: "get",
        url: `https://sx0t6z5i2c.execute-api.us-east-1.amazonaws.com/prod/games/${params.gameId}`,
      });
      setGameData(res.data);
      setLoading(false);
    }
    getGameData();
  }, [params.gameId]);
  if (loading) {
    return <Spinner />;
  }

  async function onClick() {
    console.log(params.gameId);
    if (user) {
      await axios({
        method: "post",
        url: `https://sx0t6z5i2c.execute-api.us-east-1.amazonaws.com/prod/history/${user.username}`,
        data: {
          game_id: +params.gameId,
        },
      })
        .then(alert("Added to your wish list!"))
        .catch((err) => {
          alert("Bad Request");
        });
    } else {
      alert("please login");
    }
  }

  return (
    <div className=" px-2 py-6 m-8  bg-white rounded-md mt-10 w-100">
      <div className="flex flex-row">
        <img src={gameData.cover} alt="" className=" ml-36" />
        <div className="w-full">
          <h1 className="text-4xl mb-10 font-bold z-50 text-center flex ml-10">
            {gameData.name}
          </h1>
          <div className="flex flex-row ">
            <div className="text-2xl text-center mt-30 mb-10 font-nomal w-[300px] md:w-[200px] md:text-xl">
              Platform:
              <ul className=" text-left ">
                {getInfo(gameData.platforms, "platforms").map((plat) => {
                  return (
                    <li className="ml-40 mt-5 text-xl text-violet-600 w-[200px] md:w-[100px] md:ml-20 md:text-lg">
                      {plat}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="text-2xl text-center ml-20 mt-30 mb-10 font-nomal w-[300px] md:w-[200px] md:text-xl">
              Genres:
              <ul className="text-left">
                {getInfo(gameData.genres, "genres").map((gen) => {
                  return (
                    <li className="ml-40 mt-5 text-xl text-violet-600 w-[200px] md:w-[100px] md:ml-20 md:text-lg">
                      {gen}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Swiper
              slidesPerView={1}
              navigation
              pagination={{ type: "progressbar" }}
              effect="fade"
              modules={[EffectFade]}
              autoplay={{ delay: 3000 }}
            >
              {gameData.screenshots.map((url, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="overflow-hidden h-[300px] w-[600px] ml-52 md:ml-20 md:h-[200px] md:w-[400px]"
                    style={{
                      background: `url(${gameData.screenshots[index]}) center repeat`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex flex-row right-[20%] top-58 fixed items-center md:right-[25%]">
          <p className="  text-2xl font-nomal mr-6">Rating:</p>
          <StarRatings
            className="absolute right-10"
            rating={(+gameData.rating / 100) * 5}
            starDimension="40px"
            starSpacing="15px"
            starRatedColor="rgb(250,204,21)"
          />
        </div>
      </div>

      <br />
      <br />
      <div className="flex flex-row  mt-10">
        <div className="text-xl  mt-30 mb-10 font-nomal flex flex-row ml-10">
          <p className=" font-semibold mr-10 text-2xl">Summary:</p>
          <p className="w-[450px]">
            {gameData.summary ? gameData.summary : "None"}
          </p>
        </div>
        <div className="text-xl mt-30 mb-10 font-nomal flex flex-row mr-10">
          <p className=" font-semibold mr-10 text-2xl">Storyline:</p>

          <p className="w-50%">
            {gameData.storyline ? gameData.storyline : "None"}
          </p>
        </div>
      </div>

      <div className="flex flex-row w-full ">
        <div
          className="fixed top-[10%] left-[3%] z-10 bg-white cursor-pointer border-2 border-gray-400 rounded-full w-12 h-12 flex justify-center items-center"
          onClick={onClick}
        >
          <BsFillBookmarkStarFill className="text-yellow-500 text-lg " />
        </div>
      </div>
    </div>
  );
}
