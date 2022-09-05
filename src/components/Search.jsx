import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
          <p className="py-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            voluptatum consectetur esse rem, exercitationem cupiditate
            architecto consequatur nobis necessitatibus? Officiis dolore
            laudantium culpa nam repellat sequi veritatis accusamus similique.
            Doloribus soluta ad ipsam praesentium nihil est repellat hic culpa
            nisi, nesciunt voluptas enim ut. Dolore inventore quos pariatur
            explicabo. Earum, quibusdam beatae, corrupti deleniti molestiae
            dicta odio consequatur laboriosam labore esse, quas corporis
            doloribus tempore quae! Ut itaque maxime eligendi explicabo ullam id
            sit! Eaque mollitia voluptates natus expedita illum esse debitis
            amet. Dolor a, corrupti tempore explicabo ad perferendis sint
            accusantium qui doloribus, modi error est quis mollitia dolore.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL_INCLUSIVE COPMPANY FOR 20 YEARS IN A ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL_INCLUSIVE COPMPANY FOR 20 YEARS IN A ROW
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="border text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form>
          <div className="flex flex-col my-2">
            <label>Destinations</label>
            <select className="border rounded-md p-2">
              <option>Grande Antiqua</option>
              <option>Key West</option>
              <option>Maldives</option>
              <option>Cozumel</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-in</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full my-4">Rates & Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
