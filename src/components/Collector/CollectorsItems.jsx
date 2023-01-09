import React from "react";
import OptionsIcon from "../../Assets/Icons/Options";
import { Avatar } from "../UI/Avatar";

const CollectorsItems = ({
  image,
  walletAddress,
  artboardTag,
  nationality,
  twitter,
  uniqueCollection,
  collectionSize,
  display,
}) => {
  const displayColor = display ? "bg-[#059669]" : "bg-[#DC2626]";
  return (
    <li className="grid grid-cols-9 py-5 place-items-center text-sm font-semibold tracking-wide break-word border-b border-[#AECEFF] last-of-type:border-none text-[#323A46]">
      <div className="w-[48px] aspect-square rounded-full">
        <Avatar image={image} />
      </div>
      <div>
        <p className="break-all">{walletAddress}</p>
      </div>
      <div>
        <p>{artboardTag}</p>
      </div>
      <div>
        <p>{nationality}</p>
      </div>
      <div>
        <p>{twitter}</p>
      </div>
      <div>
        <p>{uniqueCollection}</p>
      </div>
      <div>
        <p>{collectionSize}</p>
      </div>
      <div className="w-full">
        <p
          className={`${displayColor} py-[5px] w-full text-center rounded-md text-white`}
        >
          {display ? "Displayed" : "Not Displayed"}
        </p>
      </div>
      <div>
        <OptionsIcon />
      </div>
    </li>
  );
};

export default CollectorsItems;
