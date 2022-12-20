import { CognitoUser, CognitoUserAttribute } from "amazon-cognito-identity-js";
import React, { useState } from "react";
import UserPool from "../UserPool";

export default function Register() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [OTP, setOTP] = useState("");
  const [verifyProcess, setVerifyProcess] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    const attributeList = [];
    attributeList.push(
      new CognitoUserAttribute({
        Name: "email",
        Value: email,
      })
    );
    UserPool.signUp(userName, password, attributeList, null, (err, data) => {
      if (err) {
        console.log(err);
        alert("Could not sign up");
      } else {
        console.log(data);
        setVerifyProcess(true);
        console.log("Sign up successfully");
      }
    });
  }

  function verifyAccount(e) {
    e.preventDefault();
    const user = new CognitoUser({
      Username: userName,
      Pool: UserPool,
    });
    console.log(user);
    user.confirmRegistration(OTP, true, (err, data) => {
      if (err) {
        console.log(err);
        alert("Couldn't verify account");
      } else {
        console.log(data);
        alert("Account verified successfully");
        window.location.href = "/login";
      }
    });
  }

  return (
    <div className="px-2 py-6 m-8 h-full bg-white rounded-md mt-10">
      <div className="items-center flex flex-col mr-auto mt-15">
        <h1 className="text-3xl text-center mt-10 mb-10 font-bold">Sign Up</h1>
        {verifyProcess === false ? (
          <form onSubmit={onSubmit}>
            UserName:
            <br />
            <input
              className="mb-6  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-600 rounded transition ease-in-out"
              type="text"
              value={userName.toLowerCase().trim()}
              onChange={(e) => setUserName(e.target.value)}
            />
            <br />
            Email:
            <br />
            <input
              className="mb-6  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-600 rounded transition ease-in-out"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              type="submit"
              className="w-full bg-yellow-400 text-black px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-yellow-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-yellow-700"
            >
              Register
            </button>
          </form>
        ) : (
          <form onSubmit={verifyAccount}>
            Enter the VerifyCode:
            <br />
            <input
              className="mb-6  px-4 py-2 text-xl text-gray-700 bg-white border-2 border-gray-600 rounded transition ease-in-out"
              type="text"
              value={OTP}
              onChange={(e) => setOTP(e.target.value)}
            />
            <br />
            <button
              type="submit"
              className="w-full bg-yellow-400 text-black px-7 py-3 text-sm font-medium uppercase rounded shadow-md hover:bg-yellow-500 transition duration-150 ease-in-out hover:shadow-lg active:bg-yellow-700"
            >
              Verify
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
