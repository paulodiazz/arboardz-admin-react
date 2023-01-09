import React from "react";
import EditIcon from "../../Assets/Icons/EditIcon";

const CollectionItem = ({
  Policy,
  artistName,
  artboardTitle,
  location,
  supplyTime,
}) => {
  return (
    <li className="grid grid-cols-6 py-5 place-items-center text-sm font-semibold tracking-wide break-word border-b border-[#AECEFF] last-of-type:border-none text-[#323A46]">
      <div>
        <p className="break-all">{Policy}</p>
      </div>
      <div>
        <p>{artistName}</p>
      </div>
      <div>
        <p>{artboardTitle}</p>
      </div>
      <div>
        <p>{location}</p>
      </div>
      <div>
        <p>{supplyTime}</p>
      </div>
      <div>
        <EditIcon />
      </div>
    </li>
  );
};

export default CollectionItem;
