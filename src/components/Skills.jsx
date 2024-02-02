import React from "react";
import SkillsList from "./SkillsList";
import cards from "../cards";
function Skills() {
  return (
    <div>
      <div className="bg-zinc-900 flex justify-center pt-4 ">
        <div className="p-2 text-white text-4xl max-w-screen-md my-4">My Skills</div>
      </div>
      <div className="bg-zinc-900 flex justify-evenly items-center ">
        <SkillsList cards = {cards} ></SkillsList>
      </div>
    </div>
  );
}

export default Skills;
