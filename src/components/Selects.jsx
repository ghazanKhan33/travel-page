import React from "react";
import BoraBora from "../assets/borabora.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives from "../assets/maldives.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import Keywest from "../assets/keywest.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard image={BoraBora} text={'Bora Bora'} />
      <SelectsCard image={BoraBora2} text={'Bora Bora'} />
      <SelectsCard image={Maldives} text={'Maldives'} />
      <SelectsCard image={Maldives2} text={'Maldives'} />
      <SelectsCard image={Keywest} text={'Key West'} />
      <SelectsCard image={BoraBora} text={'Bora Bora'} />
    </div>
  );
};

export default Selects;
