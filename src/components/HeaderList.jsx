import React from "react";


function HeaderList({ listItem }) {
  return (
    <div>
     <ul>
        {listItem.map( (data) => {
          return (
            <li key = {data.id}>{data.title}</li>
          )
        })}
      </ul>
    </div>
  );
}

export default HeaderList;