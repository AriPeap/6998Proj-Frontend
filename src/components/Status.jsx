import React, { useContext, useEffect, useState } from "react";
import { AccountContext } from "./Account";

export default function Status() {
  const [status, setStatus] = useState(false);
  const { getSession, logout } = useContext(AccountContext);

  useEffect(() => {
    getSession()
      .then((session) => {
        console.log("Session: ", session);
        setStatus(true);
      })
      .catch((err) => {
        console.log("Session: ", err);
        setStatus(false);
      });
  }, [status, getSession]);

  return (
    <div>
      {status ? (
        <div>
          {" "}
          You are logged in.
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        "Please Login"
      )}
    </div>
  );
}
