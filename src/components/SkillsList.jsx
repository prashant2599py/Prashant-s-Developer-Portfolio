import React from "react";

function SkillsList({ cards }) {
  return (
    <div>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {cards.map((card) => {
          return (
            <div key={card.id} className="h-48 w-48 bg-zinc-800 border-solid border-2 border-zinc-700 rounded-xl hover:bg-orange-400">
              <div>
                <img src="" alt="developer_image" />
              </div>
              <div className="flex justify-center text-base text-white text-zinc-750">
                <li>{card.title}</li>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default SkillsList;