import React from "react";
import Form from "../UI/Form";
import FormInput from "../UI/FormInput";

const CollectionForm = () => {
  return (
    <Form Title="New Collection">
      <div className="flex flex-col">
        <label htmlFor="policy" className="text-[#B3B5BD] text-base">
          Policy
        </label>
        <input
          type="text"
          name="policy"
          id="policy"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-lg px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artist name" className="text-[#B3B5BD] text-base">
          Artist Name
        </label>
        <input
          type="text"
          name="Artist name"
          id="Artist name"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-lg px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Artboard Title" className="text-[#B3B5BD] text-base">
          Artboard Title
        </label>
        <input
          type="text"
          name="Artboard Title"
          id="Artboard Title"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-lg px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="Location" className="text-[#B3B5BD] text-base">
          Location
        </label>
        <input
          type="text"
          name="Location"
          id="Location"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-lg px-3"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="supply" className="text-[#B3B5BD] text-base">
          Supply
        </label>
        <input
          type="text"
          name="Supply"
          id="Supply"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline rounded-md h-11 text-lg px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="supply" className="text-[#B3B5BD] text-base">
          Artboard Description
        </label>
        <input
          type="text"
          name="Supply"
          id="Supply"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md text-lg px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="about me" className="text-[#B3B5BD] text-base">
          About Me
        </label>
        <input
          type="text"
          name="aboutMe"
          id=" about me"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md text-lg px-3"
        />
      </div>
      <div className="flex flex-col col-span-2">
        <label htmlFor="Minting details" className="text-[#B3B5BD] text-base">
          Minting Details
        </label>
        <input
          type="text"
          name="mintingDetails"
          id="Minting details"
          className="focus:bg-transparent bg-[#272832] focus:outline-white focus:outline h-[150px] rounded-md text-lg px-3"
        />
      </div>
    </Form>
  );
};

export default CollectionForm;
