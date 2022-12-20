import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserPool from "../UserPool";

export default function Header() {
  const navigate = useNavigate();

  const [pageState, setPageState] = useState("Sign in");
  //   const auth = getAuth();
  const user = UserPool.getCurrentUser();

  useEffect(() => {
    if (user) {
      setPageState("Profile");
    } else {
      setPageState("Sign in");
    }
  }, [user]);

  return (
    <div className=" sticky top-0 z-40 bg-violet-800">
      <header className="flex justify-between items-center px-3 ml-[75%] mr-6 mt-3">
        {user && (
          <p className="fixed left-10 text-stone-100 font-semibold py-3 text-lg">
            Hello! {user.username}
          </p>
        )}
        <div>
          <p
            onClick={() => navigate("/")}
            className="transition ease-in-out hover:text-yellow-400 hover:border-b-yellow-400 text-stone-100  cursor-pointer py-3  text-base font-semibold border-b-[3px] border-b-transparent"
          >
            Home
          </p>
        </div>
        <div>
          <p
            onClick={() => {
              user ? navigate("/profile") : navigate("/login");
            }}
            className="transition ease-in-out box-border hover:border-b-yellow-400 text-stone-100 hover:text-yellow-400 cursor-pointer  py-3 text-base font-semibold border-b-[3px] border-b-transparent"
          >
            {pageState}
          </p>
        </div>
        <div>
          {user && (
            <p
              onClick={() => {
                user.signOut();
                navigate("/");
              }}
              className={`transition ease-in-out text-stone-100 hover:text-yellow-400 hover:border-b-yellow-400 cursor-pointer  py-3 text-base font-semibold border-b-[3px] border-b-transparent `}
            >
              Sign out
            </p>
          )}
        </div>
      </header>
    </div>
  );
}
