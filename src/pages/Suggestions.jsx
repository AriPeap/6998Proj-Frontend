import React from "react";
import { useLocation } from "react-router";

export default function Suggesstions() {
  const location = useLocation();
  const games = location.state;
  console.log(games);
  return <div>Suggesstions</div>;
}
