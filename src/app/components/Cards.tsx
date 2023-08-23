import React from "react";
import UserLeaderboard from "./Cards/UserLeaderboard";
import Traffic from "./Cards/Traffic";
import SignupLocation from "./Cards/SignupLocation";
import Behaviour from "./Cards/Behaviour";

const Cards: React.FC = () => {
  return (
    <div className="mx-4 md:mx-10 lg:mx-20 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="md:flex justify-start items-start">
        <UserLeaderboard />
      </div>
      <div className="md:flex justify-end items-start mt-4 md:mt-0">
        <Traffic />
      </div>
      <div className="md:flex justify-start items-end mt-4">
        <SignupLocation />
      </div>
      <div className="md:flex justify-end items-end mt-4 md:mt-0">
        <Behaviour />
      </div>
    </div>
  );
};

export default Cards;
