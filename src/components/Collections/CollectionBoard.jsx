import React from "react";
import Card from "../UI/Card";
import CardHeader from "../UI/CardHeader";
import CollectionForm from "./CollectionForm";
import CollectionList from "./CollectionList";
import CollectionListHeader from "./CollectionListHeader";

const CollectionBoard = () => {
  return (
    <Card>
      <div className="grid grid-cols-collectionHeader items-center">
        <CardHeader type="Collections" />
        <div className="px-5 bg-white h-full grid items-center">
          <button className="text-white text-xs tracking-wide font-medium bg-[#14171F] py-[6px] px-[10px] rounded-md">
            Add Collections
          </button>
        </div>
      </div>
      <CollectionListHeader />
      <CollectionList />
      <CollectionForm />
    </Card>
  );
};

export default CollectionBoard;
