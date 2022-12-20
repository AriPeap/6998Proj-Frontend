import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AccountContext } from "../components/Account";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { authenticate } = useContext(AccountContext);

  const onSubmit = (e) => {
    e.preventDefault();
    authenticate(userName, password)
      .then((data) => {
        console.log(data);
        alert("login success");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("login failure");
      });
  };

  return (
    <div className="px-2 py-6 m-8 2xl:h-full bg-white rounded-md mt-10 md:h-[80%]">
      <div className=" items-center flex flex-col mr-auto mt-15">
        <h1 className="text-3xl text-center mt-10 mb-10 font-bold">Sign In</h1>
        <form onSubmit={onSubmit}>
          Username:
          <br />
          <input
            className="mb-6  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-600 rounded transition ease-in-out"
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          Password:
          <br />
          <input
            className="mb-6  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-600 rounded transition ease-in-out"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button
            className="w-full bg-yellow-400 text-black px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-yellow-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-yellow-700"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="flex justify-between whitespace-nowrap text-sm sm:text-lg mt-5">
          <p className="mb-6 ">
            Don't have a account?
            <Link
              to="/register"
              className="text-red-600 hover:text-red-700 transition duration-200 ease-in-out ml-1"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
